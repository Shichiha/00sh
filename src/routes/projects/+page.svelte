<script lang="ts">
	import '$css/content.sass';
</script>

<!-- 便利な emmet abbreviation 👇-->
<!-- section.hide>h1.section-header>a[href="https://github.com/Shichiha/"]{|}^p{|} -->

<div class="content centered">
	<section>
		<h1 class="section-header"><span style="color: red">note</span></h1>
		<p>this page doesn't contain all of my projects</p>
		<p>and might not explain them well.</p>
		<p>you might want to go to my <a href="https://github.com/Shichiha">github page</a> instead</p>
	</section>
	<section>
		<h1 class="section-header">
			<a href="https://github.com/Shichiha/quackbot" target="_blank" rel="noreferrer">quackbot</a>
		</h1>
		<p>
			quackbot is a <span class="hover-show">selfbot</span> written in
			<span style="color: #007acc">TypeScript</span>
			(used to be in <span style="color: #f0db4f">JavaScript</span>)
		</p>
		<br />
		<p>it has many commands and is very easily expandable</p>
		<p>with a modular system with it's dynamic imports of commands from a folder</p>
	</section>
	<section>
		<h1 class="section-header">
			<a href="https://github.com/Shichiha/luapeck" target="_blank" rel="noreferrer">luapeck</a>
		</h1>
		<p>luapeck is a modular program assembler written completely in lua.</p>
		<p>it assembles modular lua programs into a monolithic-like</p>
		<p>program using tables and a hard-coded function called prequire.</p>
		<br />
		<p>the concept is pretty simple,</p>
		<p>it parses all of the requires in the file, places it in a function in a table,</p>
		<p>and replaces all the requires to go to the prequire function</p>
		<p>it then outputs the packed program to stdout</p>
	</section>
	<section>
		<h1 class="section-header"><a href="https://github.com/Shichiha/bark-engin">bark-engin</a></h1>
		<p>bark engine is simply put, a learning repository.</p>
		<p>in which can be summed up in a few words:</p>
		<br />
		<p>FOV, projection, 3d rendering, canvas 2d context, logic, game loops, and more.</p>
	</section>
</div>

<style lang="sass">
	.hover-show
		opacity: 0.050
		transition: 0.25s opacity
		&:hover
			opacity: 1
</style>
