<script lang="ts">
	import { asset } from '$app/paths';
	import ExternalLink from '#lib/components/ExternalLink.svelte';
	import TechnologyList from '#lib/components/TechnologyList.svelte';
	import WordCloud from '#lib/components/WordCloud.svelte';
	import SocialLinks from '#lib/components/SocialLinks.svelte';
	import { site, distributions, technologies, tags, personMarkup } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="author" content="Ahmed Almadhoob" />
	<meta name="theme-color" content="#0b1026" />
	<link rel="canonical" href={`${site.origin}/`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={`${site.origin}/`} />
	<meta property="og:image" content={`${site.origin}/ai_personal.jpg`} />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:alt" content="Ahmed’s illustrated portrait in a luminous cyber-world" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={`${site.origin}/ai_personal.jpg`} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- Static JSON is serialized and HTML-sensitive characters are escaped. -->
	{@html personMarkup}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<div class="starfield" aria-hidden="true"></div>

<div class="site-shell">
	<header class="masthead">
		<a class="wordmark" href="#main" aria-label="Ahmed’s Intranet home">
			<span class="wordmark-symbol" aria-hidden="true">a<span>i</span>.</span>
			<span>AHMED’S INTRANET<span class="wordmark-subtitle">A PERSONAL SPACE ON THE WEB</span></span
			>
		</a>
		<nav aria-label="Page navigation">
			<a href="#about">The human</a>
			<a href="#orbit">The orbit</a>
			<a href="#follow" class="nav-contact">Hello, World! <span aria-hidden="true">↗</span></a>
		</nav>
	</header>

	<main id="main">
		<section class="landing-hero" aria-labelledby="site-title">
			<div class="hero-copy">
				<p class="eyebrow">
					<span class="signal-dot" aria-hidden="true"></span> TRANSMITTING FROM PLANET EARTH
				</p>
				<h1 id="site-title" aria-label={site.title}>
					Ahmed's<br />Intranet <span class="title-star" aria-hidden="true">✳</span>
					<span class="cloud-title">A.I. Personal Cloud</span>
				</h1>
				<p class="tagline">{site.tagline}</p>
				<div class="topic-tags" aria-label="Topics">
					{#each tags as tag (tag.name)}
						<ExternalLink href={tag.href} class="badge badge-outline">{tag.name}</ExternalLink>
					{/each}
				</div>
				<a class="hero-explore" href="#about"
					>A little about the H. sapiens <span aria-hidden="true">↓</span></a
				>
			</div>
			<div class="portrait-system">
				<div class="portrait-orbit" aria-hidden="true"></div>
				<span class="orbit-star orbit-star-one" aria-hidden="true">✦</span>
				<span class="orbit-star orbit-star-two" aria-hidden="true">✧</span>
				<span class="portrait-label" aria-hidden="true">HUMAN_001 / AHMED</span>
				<div class="portrait-frame">
					<picture>
						<source
							type="image/webp"
							srcset="/images/ahmed-480.webp 480w, /images/ahmed-800.webp 800w"
							sizes="(min-width: 900px) 420px, (min-width: 600px) 400px, 82vw"
						/>
						<img
							src="/ai_personal.jpg"
							alt="Ahmed, smiling in an illustrated blue and purple cyber-world"
							width="1024"
							height="1024"
							fetchpriority="high"
						/>
					</picture>
				</div>
				<span class="portrait-caption"
					><span aria-hidden="true">✧</span> A mind in the clouds. Feet on Earth.</span
				>
				<div class="robot-sticker" aria-hidden="true">
					<svg viewBox="0 0 100 112" fill="none">
						<path
							d="M50 20V8m-5 0h10M22 53H12v23h12m54-23h10v23H76M32 83l-3 19m39-19 3 19"
							stroke="currentColor"
							stroke-width="5"
							stroke-linecap="round"
						/>
						<rect
							x="21"
							y="23"
							width="58"
							height="61"
							rx="18"
							fill="#242144"
							stroke="currentColor"
							stroke-width="3"
						/>
						<rect x="29" y="35" width="42" height="27" rx="9" fill="#0b1026" />
						<circle cx="40" cy="48" r="4" fill="#74dff6" /><circle
							cx="60"
							cy="48"
							r="4"
							fill="#74dff6"
						/>
						<path d="M42 72h16" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
					</svg>
					<span>hello, human!</span>
				</div>
			</div>
		</section>

		<div class="transmission-divider" aria-hidden="true">
			<span>01 / THE HUMAN BEHIND THE SIGNAL</span><span>☁ ONLINE, SOMEWHERE</span>
		</div>

		<section id="about" class="about-section" aria-labelledby="about-title">
			<div class="section-heading">
				<p class="eyebrow">PART WORDSMITH. PART TECHNOLOGIST. ENTIRELY CYBORG.</p>
				<h2 id="about-title">
					Hello, world. <span class="serif-accent">I'm Ahmed.</span>
					<span aria-hidden="true">👋</span>
				</h2>
			</div>
			<p class="introduction">
				<ExternalLink href="https://social-ecology.org/wp/about/what-is-social-ecology"
					>Social thoughts</ExternalLink
				> with a <ExternalLink href="https://www.merriam-webster.com/dictionary/technopreneur"
					>techno-preneurial</ExternalLink
				> scent, Middle Eastern poet without a state, <ExternalLink
					href="https://firstmonday.org/ojs/index.php/fm/article/view/606/527"
					>transnational netizen</ExternalLink
				> who is called <span lang="zh-Latn">ēn quán</span> (<span lang="zh">恩全</span>) and lives
				<span lang="de"
					>auf einer <ExternalLink href="https://www.ovhcloud.com/en/learn/what-is-cloud-computing"
						>Wolke</ExternalLink
					> am <ExternalLink href="https://www.visitfrankfurt.travel/en">Main</ExternalLink>, mit
					ganzen <ExternalLink href="https://mathworld.wolfram.com/Integer.html">ℤ⁺</ExternalLink> und
					<ExternalLink href="https://developer.mozilla.org/en-US/docs/Glossary/Null"
						>NULL</ExternalLink
					>!</span
				>
			</p>
			<div class="email-block">
				<span class="eyebrow"
					><span aria-hidden="true">📡</span> GOOD CONVERSATIONS START WITH A SIGNAL</span
				>
				<a class="email-link" href={`mailto:${site.email}`}
					>{site.email}<span aria-hidden="true">↗</span></a
				>
				<span class="tiny-note">No wormholes required. Just an email.</span>
			</div>
		</section>

		<div class="transmission-divider" aria-hidden="true">
			<span>02 / TOOLS OF THE TRADE</span><span>POWERED BY CURIOSITY ⚡</span>
		</div>

		<section id="stack" class="stack-section" aria-labelledby="stack-title">
			<p class="eyebrow">THE OPERATING SYSTEM IS A PHILOSOPHY</p>
			<h2 id="stack-title">
				Rooted in <span class="serif-accent">Linux.</span> <span aria-hidden="true">🐧</span>
			</h2>
			<p class="section-description">
				A proud GNU/Linux user for <strong>more than 15 years</strong>. Settles on 3 desktops, but
				remained with one open-source kernel.
			</p>
			<TechnologyList items={distributions} large />
			<div class="language-heading">
				<h3>Seven technologies I speak fluently <span aria-hidden="true">🛠️</span></h3>
				<span class="eyebrow">CODE IS A UNIVERSAL LANGUAGE</span>
			</div>
			<TechnologyList items={technologies} />
			<p class="agent-note">
				<span aria-hidden="true">🤖</span> P.S. I also speak English for AI agents!
			</p>
		</section>

		<section id="orbit" class="orbit-section" aria-labelledby="orbit-title">
			<p class="eyebrow">03 / A CONSTELLATION OF GOOD THINGS</p>
			<h2 id="orbit-title">
				The things in <span class="serif-accent">my orbit.</span> <span aria-hidden="true">🪐</span>
			</h2>
			<p class="section-description">
				Stuff I like. Little pieces of a better digital universe.<br />Pick a star. There’s a whole
				world behind it. <span aria-hidden="true">✨</span>
			</p>
			<WordCloud />
		</section>

		<section class="bayern-section" aria-labelledby="bayern-title">
			<p class="eyebrow">04 / SOME THINGS ARE NOT WRITTEN IN CODE</p>
			<div class="bayern-orbit">
				<span class="bayern-orbit-line" aria-hidden="true"></span>
				<ExternalLink href="https://fcbayern.com/en" class="bayern-crest-link">
					<img
						src="/icons/bayern.svg"
						alt="FC Bayern Munich crest"
						width="132"
						height="132"
						loading="lazy"
					/>
				</ExternalLink>
			</div>
			<h2 id="bayern-title">Mia San Mia! <span aria-hidden="true">📣</span></h2>
			<p class="bayern-lyric">
				<ExternalLink href="https://genius.com/Fc-bayern-munchen-stern-des-sudens-lyrics"
					>“FC Bayern, Deutscher Meister, Ja, so heißt mein Verein”</ExternalLink
				>
			</p>
			<span class="bayern-stars" aria-hidden="true">✦ ✦ ✦ ✦ ✦</span>
		</section>

		<section class="pioneer-section" aria-labelledby="pioneer-title">
			<div class="quote-orbit" aria-hidden="true"></div>
			<p class="eyebrow">05 / A REMINDER FROM THE STARS 🛰️</p>
			<h2 id="pioneer-title">We are still <span class="serif-accent">pioneers.</span></h2>
			<figure>
				<blockquote><p>“{site.quote}”</p></blockquote>
				<figcaption>
					<span class="quote-rule" aria-hidden="true"></span>
					<ExternalLink href="https://interstellarfilm.fandom.com/wiki/Joseph_Cooper"
						>Joseph Cooper</ExternalLink
					><span class="quote-film"
						><ExternalLink href="https://www.themoviedb.org/movie/157336-interstellar"
							>INTERSTELLAR (2014)</ExternalLink
						></span
					>
				</figcaption>
			</figure>
		</section>

		<section class="soundtrack-section" aria-labelledby="soundtrack-title">
			<div class="soundtrack-heading">
				<div>
					<p class="eyebrow">06 / FREQUENCY: FEEL SOMETHING</p>
					<h2 id="soundtrack-title">
						A soundwave from <span class="serif-accent">the stars.</span>
					</h2>
				</div>
				<span class="sound-waves" aria-hidden="true">▂ ▆ █ ▄ ▂</span>
			</div>
			<div class="spotify-frame">
				<iframe
					data-testid="embed-iframe"
					title="Ahmed’s soundtrack on Spotify"
					src={site.spotify}
					width="100%"
					height="352"
					allowfullscreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<p class="spotify-fallback">
				Lost the signal? <ExternalLink
					href="https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
					class="link">Listen on Spotify ↗</ExternalLink
				>
			</p>
		</section>

		<p class="contact-reminder">
			A thought, a project, or a hello from your corner of the universe? <a
				class="link"
				href={`mailto:${site.email}`}>Drop me a line.</a
			> <span aria-hidden="true">💌</span>
		</p>

		<section id="follow" class="follow-section" aria-labelledby="follow-title">
			<p class="eyebrow">07 / LET’S KEEP OUR ORBITS CONNECTED</p>
			<h2 id="follow-title">
				Find me around <span class="serif-accent">the internet.</span>
				<span aria-hidden="true">🌍</span>
			</h2>
			<p class="section-description">Say hello. Follow along. Let's build something.</p>
			<SocialLinks />
		</section>
	</main>

	<footer class="site-footer">
		<div class="footer-transmission" aria-hidden="true">
			<span>MADE OF STARDUST & OPEN SOURCE</span><span
				>END OF TRANSMISSION <span class="signal-dot"></span></span
			>
		</div>
		<p>
			<ExternalLink href="https://en.wikipedia.org/wiki/Copyleft">Copyleft</ExternalLink> &copy; 2026
			Ahmed Almadhoob. Some rights reserved. Except where otherwise noted such as
			<a href={asset('credits.txt')} target="_blank">third-party artwork and credits page</a>,
			content on this site is licensed under <ExternalLink href={site.license}
				>Creative Commons BY-SA 4.0 International License.</ExternalLink
			>
		</p>
	</footer>
</div>
