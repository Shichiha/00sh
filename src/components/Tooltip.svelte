<script lang="ts">
	import { fade, slide } from 'svelte/transition';
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

<div bind:this={el} class="w-fit">
	<slot name="trigger" />
</div>


{#if isHovered}
	<div
		class="absolute bg-black rounded-lg py-2 px-4 text-white"
		style={`top: ${el.offsetTop + el.clientHeight}px; left: ${el.offsetLeft}px;`}		
		transition:slide={{ duration: 100 }}
	>
		<slot />
	</div>
{/if}
