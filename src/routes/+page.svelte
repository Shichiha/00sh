<script>
	import Icon from '@iconify/svelte';
	import Popup from '$components/Popup.svelte';
	import { onMount } from 'svelte';
	let show = false;
	const showPopup = () => {
		show = true;
	};
	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') show = false;
		});
	});
</script>

<main>
	<p class="text-6xl max-w-xl">
		I am <b>Shichiha.</b> <br />
		A fifteen year old Hobbyist.
	</p>
	<div class="max-w-xl">
		<hr />
	</div>
	<div class="bg-black text-white max-w-fit px-2">
		<h1>Reach me at:</h1>
	</div>
	<div class="flex flex-row gap-4 text-black">
		<a href="https://github.com/Shichiha">
			<Icon icon="logos:github-icon" class="w-10 h-10" />
		</a>
		<button
			class="border-none bg-white "
			on:click={() => {
				navigator.clipboard.writeText('Shichiha#9757');
				showPopup();
			}}
		>
			<Icon icon="logos:discord-icon" class="w-10 h-10" />
		</button>
		<a href="https://twitter.com/00sh_chiha">
			<Icon icon="logos:twitter" class="w-10 h-10" />
		</a>
		<a href="mailto:00sh.chiha@gmail.com">
			<Icon icon="logos:google-gmail" class="w-10 h-10" />
		</a>
	</div>
</main>

<Popup {show}>
	<h1>Tag Copied</h1>
	<p>Discord tag has been copied to clipboard. <br /><b>Shichiha#9757</b></p>
	<button
		class="rounded-lg cursor-pointer mt-4 py-2 px-4 border-0 bg-gray-800 text-white text-xl w-full"
		on:click={() => (show = !show)}>Close</button
	>
</Popup>
