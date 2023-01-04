<script lang="ts">
	import { fade } from 'svelte/transition';
	import {  slide } from 'svelte/transition';

	export let show = false;
	import { onMount } from 'svelte';
	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') show = false;
		});
	});
</script>

{#if show}
	<div class="bg-black/50 flex items-center justify-center h-full fixed top-0 left-0 w-full z-10" transition:fade>
		<div class="bg-white rounded-lg p-4 w-1/2 max-w-2xl" transition:slide>	
			<slot />
			<button class="rounded-lg cursor-pointer mt-4 py-2 px-4 border-0 bg-gray-800 text-white text-xl w-full"
			on:click={() => (show = !show)}>Close</button>
		</div>
	</div>
{/if}
