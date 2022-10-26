<script>
	import Github from '$lib/icon-links/Github.svelte';
	import c from '$lib/static/c.svg';
	import cpp from '$lib/static/cpp.svg';
	import javascript from '$lib/static/javascript.svg';
	import lua from '$lib/static/lua.svg';
	import python from '$lib/static/python.svg';
	import svelte from '$lib/static/svelte.svg';
	import typescript from '$lib/static/typescript.svg';
</script>

<div id="content">
	<h1>Hello, there! Welcome to my webpage!</h1>
	<p>
		I go by a variety of names, but you can just call me Shichiha! <br />
		I am a teenage programmer who started in early 2022 as a hobby. <br />
		I make programs for fun or ease-of-life
	</p>
	<p>You can find my socials and contact on the top-right side of the screen</p>
	<br />
	<div class="card">
		<h2>Stack</h2>
		<div class="languages">
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
				target="_blank"
				rel="noreferrer"
			>
				<img class="icon" src={javascript} alt="Javascript" width="50" height="50" />
			</a>
			<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
				<img class="icon" src={typescript} alt="TypeScript" width="50" height="50" />
			</a>
			<a href="https://isocpp.org/" target="_blank" rel="noreferrer">
				<img class="icon" src={cpp} alt="C++" width="50" height="50" />
			</a>
			<a href="https://www.iso.org/standard/74528.html" target="_blank" rel="noreferrer">
				<img class="icon" src={c} alt="C" width="50" height="50" />
			</a>
			<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
				<img class="icon" src={svelte} alt="Svelte" width="50" height="50" />
			</a>
			<a href="https://www.python.org/" target="_blank" rel="noreferrer">
				<img class="icon" src={python} alt="Python" width="50" height="50" />
			</a>
			<a href="https://www.lua.org/" target="_blank" rel="noreferrer">
				<img class="icon" src={lua} alt="Lua" width="50" height="50" />
			</a>
		</div>
	</div>
	
	<h1>and...?</h1>
	<p>For now, this is it, I'll add more to my website when I need to.</p>
	<div class="card">
		<Github />
		<a href="https://github.com/Shichiha/00sh" target="_blank" rel="noreferrer"
			>Code Available on Github
		</a>
	</div>
</div>

<style lang="sass">
	.languages	
		@apply flex flex-wrap justify-center items-center gap-4 m-4
		.icon
			@apply transition duration-200
			&:hover
				@apply transform scale-110
				
	#content
		@apply flex flex-col justify-center items-center gap-4
		h1
			@apply text-4xl text-center m-4 text-blue-400 font-bold xl:text-3xl
		p
			@apply text-xl text-center m-4 xl:text-2xl
		
	.card
		@apply flex flex-col justify-center items-center bg-gray-800 rounded-lg p-4 m-4 gap-4 text-2xl
</style>
