<script lang="ts">
	import { fade } from 'svelte/transition';
	import {  slide } from 'svelte/transition';

	export let show = false;
</script>

{#if show}
	<div class="bg-black/50 flex items-center justify-center h-full fixed top-0 left-0 w-full z-10" transition:fade>
		<div class="bg-white rounded-lg p-4 w-1/2 max-w-2xl" transition:slide={{easing: (t) => t * t * t * t}}>	
			<slot />
		</div>
	</div>
{/if}
