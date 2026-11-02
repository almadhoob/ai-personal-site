<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		children,
		...attributes
	}: Omit<HTMLAnchorAttributes, 'children' | 'target' | 'rel'> & { children: Snippet } = $props();
</script>

<a {...attributes} target="_blank" rel="noopener noreferrer">
	{@render children()}<span class="sr-only"> (opens in a new tab)</span>
</a>
