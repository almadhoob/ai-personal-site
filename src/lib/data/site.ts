export const site = {
	title: "Ahmed's Intranet | A.I. Personal Cloud 🌐",
	tagline: 'Technopreneural Thoughts, Electronic Literature, and Netizenship Issues!',
	origin: 'https://www.ai-personal.cloud',
	email: 'me@ai-personal.cloud',
	description:
		'The personal website of Ahmed Almadhoob, a technologist and contemporary poet from the Kingdom of Bahrain. Social thoughts on digital transformation, artificial intelligence, and internet citizenship.',
	introduction:
		'Social thoughts with a techno-preneurial scent, Middle Eastern poet without a state, transnational netizen who is called ēn quán (恩全) and lives auf einer Wolke am Main, mit ganzen ℤ⁺ und NULL!',
	spotify: 'https://open.spotify.com/embed/track/4WmB04GBqS4xPMYN9dHgBw',
	license: 'https://creativecommons.org/licenses/by-sa/4.0/',
	quote:
		"We've always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known. We count these moments as our proudest achievements. But we lost all that. Or perhaps we've just forgotten that we are still pioneers. And we've barely begun. And that our greatest accomplishments cannot be behind us, that our destiny lies above us."
} as const;

export interface Technology {
	name: string;
	detail?: string;
	href: string;
	icon: string;
}

export const distributions: Technology[] = [
	{
		name: 'Linux Mint',
		detail: 'Cinnamon',
		href: 'https://distrowatch.com/table.php?distribution=mint',
		icon: 'linuxmint'
	},
	{
		name: 'CachyOS',
		detail: 'KDE Plasma',
		href: 'https://distrowatch.com/table.php?distribution=cachyos',
		icon: 'cachyos'
	},
	{
		name: 'openSUSE',
		detail: 'SwayWM',
		href: 'https://distrowatch.com/table.php?distribution=opensuse',
		icon: 'opensuse'
	}
];

export const technologies: Technology[] = [
	{ name: 'C++', href: 'https://isocpp.org', icon: 'cplusplus' },
	{ name: 'Rust', href: 'https://rust-lang.org', icon: 'rust' },
	{ name: 'Golang', href: 'https://go.dev', icon: 'go' },
	{ name: 'Python', href: 'https://www.python.org', icon: 'python' },
	// { name: 'Ruby', href: 'https://www.ruby-lang.org', icon: 'ruby' },
	// { name: 'Elixir', href: 'https://elixir-lang.org', icon: 'elixir' },
	// { name: 'Vue', href: 'https://vuejs.org', icon: 'vuejs' },
	{ name: 'ECMAScript', href: 'https://tc39.es/ecma262', icon: 'javascript' },
	{ name: 'Svelte', href: 'https://svelte.dev', icon: 'svelte' },
	{ name: 'Flutter', href: 'https://flutter.dev', icon: 'flutter' }
];

export const tags = [
	{
		name: '#DigitalTransformation',
		href: 'https://www.redhat.com/en/topics/digital-transformation'
	},
	{ name: '#CloudComputing', href: 'https://www.redhat.com/en/topics/cloud-computing' },
	{ name: '#GenerativeAI', href: 'https://www.redhat.com/en/topics/ai/what-is-generative-ai' }
];

export const advocacy: { name: string; href: string }[] = [
	{ name: 'Android', href: 'https://www.android.com' },
	{ name: 'Linux Mint', href: 'https://linuxmint.com' },
	{ name: 'Alpine Linux', href: 'https://alpinelinux.org' },
	{ name: 'NixOS', href: 'https://nixos.org' },
	{ name: 'openSUSE', href: 'https://get.opensuse.org/tumbleweed' },
	{ name: 'openSUSEway', href: 'https://en.opensuse.org/Portal:OpenSUSEway' },
	{ name: 'Rocky Linux', href: 'https://rockylinux.org' },
	{ name: 'MircoOS', href: 'https://microos.opensuse.org' },
	{ name: 'KDE Plasma', href: 'https://kde.org/plasma-desktop' },
	{ name: 'OnlyOffice', href: 'https://www.onlyoffice.com' },
	{ name: 'LibreOffice', href: 'https://www.libreoffice.org' },
	{ name: 'ThinkPad', href: 'https://www.ibm.com/history/thinkpad' },
	{ name: 'Pinebook Pro', href: 'https://pine64.org/devices/pinebook_pro' },
	{ name: 'Raspberry Pi', href: 'https://www.raspberrypi.com' },
	{ name: 'Fairphone', href: 'https://www.fairphone.com' },
	{ name: 'PocketBook', href: 'https://pocketbook.ch/en-ch' },
	{ name: 'Zed Editor', href: 'https://zed.dev' },
	{ name: 'Warp Terminal', href: 'https://www.warp.dev' },
	{ name: 'Neovim', href: 'https://neovim.io' },
	{ name: 'OpenCode', href: 'https://opencode.ai' },
	{ name: 'Mistral AI', href: 'https://mistral.ai' },
	{ name: 'Qwen AI', href: 'https://qwen.ai' },
	{ name: 'DeepSeek', href: 'https://www.deepseek.com' },
	{ name: 'OVH Cloud', href: 'https://www.ovhcloud.com' },
	{ name: 'Alibaba', href: 'https://www.alibabacloud.com' },
	{ name: 'AWS Cloud', href: 'https://aws.amazon.com' },
	{ name: 'Hetzner', href: 'https://www.hetzner.com' },
	{ name: 'OpenStack', href: 'https://www.openstack.org' },
	{ name: 'Firefox', href: 'https://www.firefox.com' },
	{ name: 'Brave', href: 'https://brave.com' },
	{ name: 'Opera', href: 'https://www.opera.com' },
	{ name: 'Vivaldi', href: 'https://vivaldi.com' },
	{ name: 'Ecosia', href: 'https://www.ecosia.org' },
	{ name: 'GOOD Search', href: 'https://good-search.org' },
	{ name: 'ERPNext', href: 'https://frappe.io/erpnext' },
	{ name: 'Proton', href: 'https://proton.me' },
	{ name: 'Telegram', href: 'https://telegram.org' },
	{ name: 'Mastodon', href: 'https://joinmastodon.org' },
	{ name: 'Ethereum', href: 'https://ethereum.org' },
	{ name: 'Polkadot', href: 'https://polkadot.com' },
	{ name: 'ECMAScript', href: 'https://tc39.es/ecma262' },
	{ name: 'NativeScript', href: 'https://nativescript.org' },
	{ name: 'Golang', href: 'https://go.dev' },
	{ name: 'C++', href: 'https://isocpp.org' },
	{ name: 'Lua', href: 'https://www.lua.org' },
	{ name: 'Python', href: 'https://www.python.org' },
	{ name: 'Ruby', href: 'https://www.ruby-lang.org' },
	{ name: 'Elixir', href: 'https://elixir-lang.org' },
	{ name: 'VueJS', href: 'https://vuejs.org' },
	{ name: 'SvelteJS', href: 'https://svelte.dev' },
	{ name: 'OpenUI5', href: 'https://openui5.org' },
	{ name: 'Phoenix', href: 'https://www.phoenixframework.org' },
	{ name: 'Django', href: 'https://www.djangoproject.com' },
	{ name: 'Drogon', href: 'https://drogon.org' },
	{ name: 'Qt Framework', href: 'https://www.qt.io' }
];

export interface Social {
	name: string;
	href: string;
	icon: string;
	handle: string;
}

export const featuredSocials: Social[] = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/almadhoob',
		icon: 'linkedin',
		handle: '@almadhoob'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/almadhoob',
		icon: 'github',
		handle: '@almadhoob'
	}
];

export const otherSocials: Social[] = [
	{
		name: 'Mastodon',
		href: 'https://mastodon.social/@ahmedintra',
		icon: 'mastodon',
		handle: '@ahmedintra'
	},
	{
		name: 'Threads',
		href: 'https://www.threads.net/@ahmedintra',
		icon: 'threads',
		handle: '@ahmedintra'
	},
	{
		name: 'X Platform',
		href: 'https://x.com/ahmedintra',
		icon: 'x',
		handle: '@ahmedintra'
	},
	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@ahmedintra',
		icon: 'tiktok',
		handle: '@ahmedintra'
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/ahmedintra',
		icon: 'instagram',
		handle: '@ahmedintra'
	},
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/ahmedintra',
		icon: 'facebook',
		handle: '@ahmedintra'
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/@ahmedintra',
		icon: 'youtube',
		handle: '@ahmedintra'
	}
];

function hash(value: string, seed: number): number {
	let result = seed;
	for (const character of value) result = Math.imul(result ^ character.charCodeAt(0), 16777619);
	return result >>> 0;
}

export function createWordCloud(seed = 2026) {
	return advocacy
		.map((word) => ({
			...word,
			order: hash(word.name, seed),
			size: hash(word.name, seed + 1) % 4,
			tone: hash(word.name, seed + 2) % 4
		}))
		.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Ahmed Almadhoob',
	url: `${site.origin}/`,
	image: `${site.origin}/ai_personal.jpg`,
	email: `mailto:${site.email}`,
	sameAs: [...featuredSocials, ...otherSocials].map((profile) => profile.href)
};

export const personMarkup = `<script type="application/ld+json">${JSON.stringify(personSchema).replaceAll('<', '\\u003c')}</script>`;
