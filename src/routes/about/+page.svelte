<script>
	import '$css/content.sass';
	import c from '$lib/static/c.svg';
	import cpp from '$lib/static/cpp.svg';
	import javascript from '$lib/static/javascript.svg';
	import lua from '$lib/static/lua.svg';
	import python from '$lib/static/python.svg';
	import svelte from '$lib/static/svelte.svg';
	import typescript from '$lib/static/typescript.svg';
</script>

<div class="content centered" style="max-width:90vw;">
	<section>
		<h1 class="section-header">Hello, World! 👋</h1>
		<p>
			I go by Shichiha, shichihachi, or 78.
			<br />
			I attend a regular high school and enjoy playing video games.
			<br />
			reading manga, watching anime.
			<br />
			and began programming as a hobby in 2022.
		</p>
	</section>
	<section>
		<h2 class="section-header">Gaming 🎮</h2>
		<p>
			I enjoy playing games like <a href="https://osu.ppy.sh/home">osu!</a>,
			<a href="https://minecraft.net/en-us/">Minecraft</a>, and
			<a href="https://terraria.org/">terraria</a>
			<br />
			(well, those are the ones my PC can actually run <span class="kaomoji">〒▽〒</span> )
		</p>
	</section>
	<section>
		<h2 class="section-header">Media 📺</h2>
		<p>
			I read and watch the typical (anime/manga) isekai stories that you would commonly encounter.
			<br />
			A little romance, a little action—it truly depends.
			<br />
			However, if I can't find any anime or manga to devour, I would just watch YouTube videos.
			<br />
			(￣y▽,￣)╭
		</p>
	</section>
	<section>
		<h2 class="section-header">Programming 💻</h2>
		<p>
			I started programming in late 2021
			<br />
			and it's been a year from there,
			<br />
			getting back to it,
			<br />
			<br />
			I program in: <span class="spec">(sorted by my github usage)</span>
			<br />
		</p>
		<div class="languages">
			<img class="icon" src={javascript} alt="Javascript" width="50" height="50" />
			<img class="icon" src={typescript} alt="TypeScript" width="50" height="50" />
			<img class="icon" src={cpp} alt="C++" width="50" height="50" />
			<img class="icon" src={c} alt="C" width="50" height="50" />
			<img class="icon" src={svelte} alt="Svelte" width="50" height="50" />
			<img class="icon" src={python} alt="Python" width="50" height="50" />
			<img class="icon" src={lua} alt="Lua" width="50" height="50" />
		</div>
		<p>A few things I've created are websites, discord bots, lua webpack, and other stuff.</p>
		<br />
		<p>
			I'm interested in making games, <br />
			and making my life generally easier just by having the knowledge
			<span class="kaomoji">( •̀ ω •́ )y</span>
		</p>
	</section>
	<section>
		<h2 class="section-header">Extra: Computer Specs 🖥️</h2>
		<p>
			<span class="spec">Shichiha's Novabench Score</span>
			<br />
			<span class="spec">model</span> 11th Gen Intel Core i5-1135G7<br />
			<span class="spec">graphics</span> Intel Iris Xe Graphics<br />
			<span class="spec">memory</span> 8 GB RAM - Windows 11<br />
			<span class="spec">score</span> 1846
		</p>
	</section>
</div>

<style lang="sass">
	.languages
		display: grid
		// 1 行あたり 3 つのicon、2 行
		grid-template-columns: repeat(3, 1fr)

		.icon
			margin: 1vw
			transition: 0.2s
			&:hover
				transform: scale(1.1)
</style>