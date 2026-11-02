<script lang="ts">
	import { featuredSocials, otherSocials } from '#lib/data/site.ts';
	import ExternalLink from './ExternalLink.svelte';
</script>

<div class="featured-socials">
	{#each featuredSocials as social (social.name)}
		<ExternalLink href={social.href} class="follow-link">
			<img src={`/icons/${social.icon}.svg`} alt="" width="38" height="38" loading="lazy" />
			<span><strong>{social.name}</strong><span>{social.handle}</span></span>
			<span class="follow-arrow" aria-hidden="true">↗</span>
		</ExternalLink>
	{/each}
</div>
<nav class="social-orbit" aria-label="Other social profiles">
	{#each otherSocials as social (social.name)}
		<ExternalLink
			href={social.href}
			class="social-icon btn btn-square btn-ghost"
			title={`${social.name} · ${social.handle}`}
		>
			<img src={`/icons/${social.icon}.svg`} alt="" width="23" height="23" loading="lazy" />
			<span class="sr-only">{social.name}: {social.handle}</span>
		</ExternalLink>
	{/each}
</nav>
