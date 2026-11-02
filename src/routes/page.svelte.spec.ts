import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';
import { advocacy, site } from '#lib/data/site.ts';

function visibleCopy(selector: string) {
	const element = document.querySelector(selector)?.cloneNode(true) as HTMLElement | undefined;
	element?.querySelectorAll('.sr-only, [aria-hidden="true"]').forEach((node) => node.remove());
	return element?.textContent?.replace(/\s+/g, ' ').trim();
}

describe('Ahmed’s landing page', () => {
	it('preserves the personal copy and requested section order', async () => {
		render(Page);
		await expect.element(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(site.title);
		expect(visibleCopy('.introduction')).toBe(site.introduction);
		expect(visibleCopy('blockquote')).toBe(`“${site.quote}”`);
		expect(
			Array.from(document.querySelectorAll('main > section')).map((section) => section.className)
		).toEqual([
			'landing-hero',
			'about-section',
			'stack-section',
			'orbit-section',
			'bayern-section',
			'pioneer-section',
			'soundtrack-section',
			'follow-section'
		]);
		expect(document.querySelectorAll(`a[href="mailto:${site.email}"]`)).toHaveLength(2);
	});

	it('includes all technology links, advocacy words, and accessible profile links', () => {
		render(Page);
		expect(document.querySelectorAll('.distro-grid li')).toHaveLength(3);
		expect(document.querySelectorAll('.technology-grid li')).toHaveLength(7);
		expect(document.querySelectorAll('.word-cloud li')).toHaveLength(57);
		for (const word of advocacy) {
			expect(
				Array.from(document.querySelectorAll('.word-cloud a')).some((link) =>
					link.textContent?.startsWith(word.name)
				)
			).toBe(true);
		}
		expect(document.querySelectorAll('.featured-socials a')).toHaveLength(2);
		expect(document.querySelectorAll('.social-orbit a')).toHaveLength(7);
		for (const link of document.querySelectorAll('.social-orbit a')) {
			expect(link.querySelector('.sr-only')?.textContent?.trim().length).toBeGreaterThan(2);
		}
	});

	it('provides safe new-tab links, a labelled Spotify embed, and the correct license notice', () => {
		render(Page);
		for (const link of document.querySelectorAll('a[href^="https://"]')) {
			expect(link.getAttribute('target')).toBe('_blank');
			expect(link.getAttribute('rel')).toBe('noopener noreferrer');
			expect(link.textContent).toContain('(opens in a new tab)');
		}
		const embed = document.querySelector('iframe');
		expect(embed?.getAttribute('src')).toBe(site.spotify);
		expect(embed?.getAttribute('title')).toBe('Ahmed’s soundtrack on Spotify');
		expect(embed?.getAttribute('loading')).toBe('lazy');
		expect(visibleCopy('.site-footer > p')).toBe(
			'Copyleft © 2026 Ahmed Almadhoob. Some rights reserved. Except where otherwise noted, content on this site is licensed under Creative Commons BY-SA 4.0 International License.'
		);
		expect(document.querySelector(`a[href="${site.license}"]`)).not.toBeNull();
	});
});
