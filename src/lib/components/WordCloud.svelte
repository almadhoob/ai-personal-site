<script lang="ts">
	import { createWordCloud } from '#lib/data/site.ts';
	import ExternalLink from './ExternalLink.svelte';

	const words = createWordCloud();
</script>

<div class="cloud-shell">
	<span class="cloud-coordinate" aria-hidden="true">☁ INTERESTS / CONSTELLATION_057</span>
	<ul class="word-cloud" aria-label="Tech things I love and advocate for">
		{#each words as word (word.name)}
			<li class={`word-size-${word.size} word-tone-${word.tone}`}>
				<ExternalLink
					href={word.href}
					title={word.name}
					aria-describedby={word.name}
					>{word.name}</ExternalLink
				>
			</li>
		{/each}
	</ul>
	<span class="cloud-footnote" aria-hidden="true">OPEN SYSTEMS. OPEN POSSIBILITIES. ✧</span>
</div>
