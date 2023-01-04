<script lang="ts">
	import { onMount } from 'svelte';
	let el: HTMLElement;
	let isHovered = false;

	onMount(() => {
		el.addEventListener('mouseenter', () => {
			isHovered = true;
		});

		el.addEventListener('mouseleave', () => {
			isHovered = false;
		});
	});
</script>

<div bind:this={el}>
	<slot name="trigger" />
</div>

{#if isHovered}
	<!-- TODO: Fix the tooltip position -->
	<div
		class="absolute bg-black rounded-lg py-2 px-4 text-white"
		style={`top: ${el.offsetTop - el.offsetTop / 12}px; left: ${el.offsetLeft}px;`}
	>
		<slot />
	</div>
{/if}
