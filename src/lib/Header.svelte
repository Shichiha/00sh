<script>
	// social-icon
	import Twitter from '$lib/icon-links/Twitter.svelte';
	import Mail from '$lib/icon-links/Mail.svelte';
	import Github from '$lib/icon-links/Github.svelte';
	import Discord from '$lib/icon-links/Discord.svelte';

	//
	import Circle from '$lib/icon-links/Circle.svelte';
</script>

<header>
	<div class="title">
		<p>
			<a style="color: #fff;" href="/">00sh.cf</a>
		</p>
	</div>
	<div class="social-icons show-big">
		<Github />
		<Mail />
		<Twitter />
		<Discord />
	</div>
	<div class="show-small"><Circle /></div>
</header>

<style lang="sass">
	header 
		@apply flex flex-row justify-between items-center p-4 mb-10 text-2xl
		.show-big
			@apply xl:flex hidden flex-row
		.show-small
			@apply xl:hidden flex flex-row cursor-pointer transition-all
	.social-icons
		@apply flex justify-between items-center h-6 w-1/5 xl:w-1/4
		

</style>
