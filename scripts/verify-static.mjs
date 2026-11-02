import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat, mkdtemp } from 'node:fs/promises';
import { resolve, extname, sep, join } from 'node:path';
import { tmpdir } from 'node:os';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { site, advocacy } from '../src/lib/data/site.ts';

const build = resolve('build');
const html = await readFile(join(build, 'index.html'), 'utf8');
assert(!/<script[^>]+src=/i.test(html), 'The static page must not ship first-party JavaScript');
assert(!/<link[^>]+rel="modulepreload"/i.test(html), 'No hydration modules should be preloaded');
assert(html.includes(site.email), 'Contact must be present in generated HTML');
assert(html.includes('BY-SA'), 'The approved license must be prerendered');
assert.equal((await readFile(join(build, 'CNAME'), 'utf8')).trim(), 'www.ai-personal.cloud');
assert((await readFile(join(build, 'sitemap.xml'), 'utf8')).includes(`${site.origin}/`));
assert((await readFile(join(build, 'robots.txt'), 'utf8')).includes(`${site.origin}/sitemap.xml`));
const cssPath = html.match(/href="([^"]+\.css)"/)?.[1];
assert(cssPath, 'A stylesheet must be included');
const css = await readFile(join(build, cssPath));
assert(css.byteLength < 40_000, `Unexpected CSS growth: ${css.byteLength} bytes`);
assert(
	(await stat(join(build, 'images/ahmed-800.webp'))).size <
		(await stat(join(build, 'ai_personal.jpg'))).size
);

const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css',
	'.svg': 'image/svg+xml',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.xml': 'application/xml',
	'.txt': 'text/plain; charset=utf-8'
};

const server = createServer(async (request, response) => {
	try {
		const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
		let filename = resolve(build, `.${pathname}`);
		if (filename !== build && !filename.startsWith(build + sep)) {
			response.writeHead(403).end();
			return;
		}
		if ((await stat(filename)).isDirectory()) filename = join(filename, 'index.html');
		const body = await readFile(filename);
		response
			.writeHead(200, { 'content-type': types[extname(filename)] || 'application/octet-stream' })
			.end(body);
	} catch {
		response.writeHead(404).end('Not found');
	}
});
await new Promise((ready) => server.listen(0, 'localhost', ready));
const address = server.address();
const origin = `http://localhost:${address.port}`;
const screenshots = await mkdtemp(join(tmpdir(), 'ahmed-intranet-'));
let browser;

try {
	browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
	const page = await context.newPage();
	const failedAssets = [];
	page.on('response', (response) => {
		if (response.url().startsWith(origin) && response.status() >= 400)
			failedAssets.push(response.url());
	});
	await page.route('https://open.spotify.com/**', (route) => route.abort());
	await page.goto(origin, { waitUntil: 'load' });
	assert.equal(await page.title(), site.title);
	assert.equal(await page.locator('h1').count(), 1);
	assert.equal(await page.locator('.word-cloud li').count(), advocacy.length);
	assert.equal(await page.locator('.distro-grid li').count(), 3);
	assert.equal(await page.locator('.technology-grid li').count(), 7);
	assert.equal(await page.locator('.social-orbit a').count(), 7);
	assert.equal(await page.locator('iframe').getAttribute('src'), site.spotify);
	assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `${site.origin}/`);
	const person = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
	assert.equal(person.name, 'Ahmed Almadhoob');
	assert.equal(person.sameAs.length, 9);
	await page.evaluate(() => {
		for (const image of document.images) image.loading = 'eager';
	});
	await page.waitForFunction(() =>
		[...document.images].every((image) => image.complete && image.naturalWidth > 0)
	);
	await page.evaluate(() => window.scrollTo(0, 0));

	for (const width of [320, 375, 768, 1024, 1440]) {
		await page.setViewportSize({ width, height: 1000 });
		const overflow = await page.evaluate(() => ({
			viewport: document.documentElement.clientWidth,
			content: document.documentElement.scrollWidth,
			elements: [...document.querySelectorAll('body *')]
				.filter((element) => {
					const bounds = element.getBoundingClientRect();
					return bounds.width > 0 && bounds.right > innerWidth;
				})
				.map((element) => ({
					element: element.tagName,
					class: element.getAttribute('class'),
					right: element.getBoundingClientRect().right
				}))
				.slice(-12)
		}));
		assert(
			overflow.content <= overflow.viewport,
			`Horizontal overflow at ${width}px: ${JSON.stringify(overflow)}`
		);
		assert(await page.locator('.email-link').isVisible());
		const image = width === 1440 ? 'desktop.jpg' : width === 375 ? 'mobile.jpg' : null;
		if (image)
			await page.screenshot({ path: join(screenshots, image), quality: 85, fullPage: true });
		console.log(`PASS ${width}px: no horizontal overflow, content available without JavaScript`);
	}

	await page.setViewportSize({ width: 1440, height: 1000 });
	await page.goto(origin, { waitUntil: 'load' });
	await page.keyboard.press('Tab');
	assert.equal(await page.locator(':focus').textContent(), 'Skip to content');
	await page.keyboard.press('Enter');
	assert.equal(await page.evaluate(() => location.hash), '#main');
	const motion = await page
		.locator('.title-star')
		.evaluate((element) => getComputedStyle(element).animationName);
	assert.equal(motion, 'none', 'Reduced-motion preference must disable decorative animation');

	for (const width of [375, 1440]) {
		await page.setViewportSize({ width, height: 1000 });
		await page.evaluate(() => {
			document.documentElement.style.fontSize = '200%';
		});
		const overflows = await page.evaluate(
			() => document.documentElement.scrollWidth > document.documentElement.clientWidth
		);
		assert(!overflows, `200% text zoom causes overflow at ${width}px`);
		await page.evaluate(() => {
			document.documentElement.style.fontSize = '';
		});
	}
	assert(
		await page.getByRole('link', { name: /Listen on Spotify/ }).isVisible(),
		'Blocked embed needs a visible fallback'
	);
	const unsafeLinks = await page
		.locator('a[href^="https://"]')
		.evaluateAll(
			(links) =>
				links.filter(
					(link) =>
						link.target !== '_blank' ||
						!link.rel.includes('noopener') ||
						!link.rel.includes('noreferrer')
				).length
		);
	assert.equal(unsafeLinks, 0);
	assert.deepEqual(failedAssets, []);

	await context.close();
	const auditContext = await browser.newContext({ reducedMotion: 'reduce' });
	const auditPage = await auditContext.newPage();
	await auditPage.route('https://open.spotify.com/**', (route) => route.abort());
	await auditPage.goto(origin, { waitUntil: 'load' });
	for (const width of [375, 1440]) {
		await auditPage.setViewportSize({ width, height: 1000 });
		const results = await new AxeBuilder({ page: auditPage })
			.exclude('iframe')
			.withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
			.analyze();
		assert.deepEqual(
			results.violations.map((violation) => ({
				id: violation.id,
				impact: violation.impact,
				nodes: violation.nodes.map((node) => ({
					target: node.target,
					summary: node.failureSummary
				}))
			})),
			[],
			`Accessibility violations at ${width}px`
		);
		console.log(`PASS ${width}px: automated WCAG A/AA audit (Spotify contents excluded)`);
	}
	console.log(
		`PASS static HTML, local assets, metadata, links, 200% text zoom, keyboard, reduced motion, and blocked embed fallback`
	);
	console.log(`CSS: ${css.byteLength} bytes; first-party JavaScript: 0 bytes`);
	console.log(`Screenshots: ${screenshots}`);
} finally {
	await browser?.close();
	await new Promise((done) => server.close(done));
}
