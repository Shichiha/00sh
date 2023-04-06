<script>
	import Socials from '$partial/Socials.svelte';
	import Icon from '@iconify/svelte';
	
</script>

<main>
	<p class="text-6xl max-w-xl">
		<b>Shichiha.</b> <br />
		A fifteen year old Computer Hobbyist.
	</p>

	<div class="max-w-xl">
		<hr />
	</div>

	<Socials />
</main>

<div class="fixed bottom-0 right-4 flex flex-row gap-4 justify-center">
	<a
		class="text-xs text-gray-500 inline-flex items-center gap-2 no-underline"
		href="https://svelte.dev"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>Made with </span>
		<Icon icon="logos:svelte-icon" />
	</a>
	<div class="text-xs text-gray-500">|</div>
	<a
		class="text-xs text-gray-500 inline-flex items-center gap-2 no-underline"
		href="https://vercel.com"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>Hosted on</span>
		<Icon icon="logos:vercel" />
	</a>
</div>
