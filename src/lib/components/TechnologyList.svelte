<script lang="ts">
	import type { Technology } from '#lib/data/site.ts';
	import ExternalLink from './ExternalLink.svelte';

	let { items, large = false }: { items: Technology[]; large?: boolean } = $props();
</script>

<ul
	class={large ? 'distro-grid' : 'technology-grid'}
	aria-label={large ? 'Linux distributions' : 'Languages and frameworks'}
>
	{#each items as item (item.name)}
		<li>
			<ExternalLink href={item.href} class={large ? 'distro-link' : 'technology-link'}>
				<img
					src={`/icons/${item.icon}.svg`}
					width={large ? 72 : 36}
					height={large ? 72 : 36}
					alt=""
					loading="lazy"
				/>
				<strong>{item.name}</strong>
				{#if item.detail}<span class="technology-detail">{item.detail}</span>{/if}
				{#if large}<span class="destination-label">DISTROWATCH ↗</span>{/if}
			</ExternalLink>
		</li>
	{/each}
</ul>
