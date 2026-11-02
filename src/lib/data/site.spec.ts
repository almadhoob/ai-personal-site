import { describe, expect, it } from 'vitest';
import {
	advocacy,
	createWordCloud,
	distributions,
	technologies,
	featuredSocials,
	otherSocials,
	site
} from './site';

const expectedWords = [
	'Android',
	'Linux Mint',
	'Alpine Linux',
	'NixOS',
	'openSUSE',
	'openSUSEway',
	'Rocky Linux',
	'MircoOS',
	'KDE Plasma',
	'OnlyOffice',
	'LibreOffice',
	'ThinkPad',
	'Pinebook Pro',
	'Raspberry Pi',
	'Fairphone',
	'PocketBook',
	'Zed Editor',
	'Warp Terminal',
	'Neovim',
	'OpenCode',
	'Mistral AI',
	'Qwen AI',
	'DeepSeek',
	'OVH Cloud',
	'Alibaba',
	'AWS Cloud',
	'Hetzner',
	'OpenStack',
	'Firefox',
	'Brave',
	'Opera',
	'Vivaldi',
	'Ecosia',
	'GOOD Search',
	'ERPNext',
	'Proton',
	'Telegram',
	'Mastodon',
	'Ethereum',
	'Polkadot',
	'ECMAScript',
	'NativeScript',
	'Golang',
	'C++',
	'Lua',
	'Python',
	'Ruby',
	'Elixir',
	'VueJS',
	'SvelteJS',
	'OpenUI5',
	'Phoenix',
	'Django',
	'Drogon',
	'Qt Framework'
];

describe('personal content', () => {
	it('retains every requested advocacy label, including the supplied spellings', () => {
		expect(advocacy.map((word) => word.name)).toEqual(expectedWords);
		expect(new Set(expectedWords).size).toBe(57);
	});

	it('produces a stable, complete cloud without modifying the source order', () => {
		const before = advocacy.map((word) => word.name);
		const cloud = createWordCloud();
		expect(cloud).toEqual(createWordCloud());
		expect(cloud.map((word) => word.name).sort()).toEqual([...expectedWords].sort());
		expect(advocacy.map((word) => word.name)).toEqual(before);
		expect(
			cloud.every((word) => word.size >= 0 && word.size <= 3 && word.tone >= 0 && word.tone <= 3)
		).toBe(true);
		expect(createWordCloud(42)).not.toEqual(cloud);
	});

	it('includes the required technology and social destinations', () => {
		expect(distributions).toHaveLength(3);
		expect(technologies.map((technology) => technology.name)).toEqual([
			'C++',
			'Rust',
			'Golang',
			'Python',
			'Flutter',
			'Svelte',
			'ECMAScript'
		]);
		expect(featuredSocials.map((social) => social.href)).toEqual([
			'https://www.linkedin.com/in/almadhoob',
			'https://github.com/almadhoob'
		]);
		expect(otherSocials.map((social) => social.href)).toEqual([
			'https://mastodon.social/@ahmedintra',
			'https://www.threads.net/@ahmedintra',
			'https://x.com/ahmedintra',
			'https://www.tiktok.com/@ahmedintra',
			'https://www.instagram.com/ahmedintra',
			'https://www.facebook.com/ahmedintra',
			'https://www.youtube.com/@ahmedintra'
		]);
	});

	it('uses HTTPS for every external destination and the approved license', () => {
		for (const item of [
			...advocacy,
			...distributions,
			...technologies,
			...featuredSocials,
			...otherSocials
		]) {
			expect(new URL(item.href).protocol).toBe('https:');
		}
		expect(site.license).toBe('https://creativecommons.org/licenses/by-sa/4.0/');
	});
});
