<script>
	import Icon from '@iconify/svelte';
</script>

<main>
	<p class="text-6xl max-w-xl">
		I am <b>Shichiha.</b> <br />
		A fifteen year old Hobbyist.
	</p>
	<div class="max-w-xl">
		<hr />
	</div>
	<h1>Reach me at:</h1>
	<div class="flex flex-row gap-4 text-black">
		<a href="https://github.com/Shichiha">
			<Icon icon="logos:github-icon" class="w-10 h-10"></Icon>
		</a>
		<button class="border-none bg-white " on:click={() => navigator.clipboard.writeText('Shichiha#9757')}>
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

