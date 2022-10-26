<script>
	import { slide } from 'svelte/transition';
	import Discord from './Discord.svelte';
	import Github from './Github.svelte';
	import Mail from './Mail.svelte';
	import Twitter from './Twitter.svelte';
	let menu = false;
</script>

<button
	name="menu"
	on:click={(e) => {
		menu = !menu;
	}}
>
	<svg width="5vh" height="5vh" viewBox="0 0 64 64" fill="none">
		<circle stroke="#ffffff" stroke-width="6" stroke-miterlimit="10" cx="28" cy="28" r="25" />
	</svg>
</button>
{#if menu}
	<div class="menu" in:slide={{ duration: 500 }} out:slide={{ duration: 1500 }}>
		<Github />
		<Mail />
		<Twitter />
		<Discord />
		<div class="close">
			<button
				name="close"
				on:click={() => menu = !menu}
			>
				<svg width="5vh" height="5vh" viewBox="0 0 64 64" fill="#fff">
					<circle stroke="#ffffff" stroke-width="6" stroke-miterlimit="10" cx="28" cy="28" r="25" />
				</svg>
			</button>
		</div>
	</div>
{/if}

<style lang="sass">
	button 
		border: none 
		background: none 
		z-index: 10

	.menu 
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		position: absolute
		top: 0
		left: 0
		width: 100vw
		height: 100%
		background: #000
		z-index: 5
		gap: 10vh
		p,div
			color: black


</style>
