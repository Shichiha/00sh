<script>
	import Icon from '@iconify/svelte';
	import Popup from '$components/Popup.svelte';
	import Tooltip from '$components/Tooltip.svelte';
	let discordPopup = false;
</script>

<main>
	<p class="text-6xl max-w-xl">
		<b>Shichiha.</b> <br />
		A fifteen year old Computer Hobbyist.
	</p>

	<div class="max-w-xl">
		<hr />
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex flex-col">
			<h1 class="bg-black text-white max-w-fit px-2">Reach me at</h1>
			<div class="flex flex-row gap-4">
				<Tooltip>
					<div slot="trigger">
						<a href="https://github.com/Shichiha">
							<Icon icon="logos:github-icon" class="w-10 h-10" />
						</a>
					</div>
					<span>Github</span>
				</Tooltip>
				<Tooltip>
					<div slot="trigger">
						<button
							class="border-none bg-white "
							on:click={() => {
								navigator.clipboard.writeText('Shichiha#9757');
								discordPopup = true;
							}}
						>
							<Icon icon="logos:discord-icon" class="w-10 h-10" />
						</button>
					</div>
					<span>Discord</span>
				</Tooltip>
				<Tooltip>
					<div slot="trigger">
						<a href="https://twitter.com/00sh_chiha">
							<Icon icon="logos:twitter" class="w-10 h-10" />
						</a>
					</div>
					<span>Twitter</span>
				</Tooltip>
				<Tooltip>
					<div slot="trigger">
						<a href="mailto:00sh.chiha@gmail.com">
							<Icon icon="logos:google-gmail" class="w-10 h-10" />
						</a>
					</div>
					<span>Gmail</span>
				</Tooltip>
			</div>
		</div>
		<div>
			<h1 class="bg-black text-white max-w-fit px-2">About</h1>
			<div class="flex flex-col">
				<Tooltip>
					<div slot="trigger">
						<a href="https://blog.00sh.cf">
							<Icon icon="logos:hashnode-icon" class="w-10 h-10" />
						</a>
					</div>
					<span>My Blog</span>
				</Tooltip>
			</div>
		</div>
	</div>
</main>

<Popup bind:show={discordPopup}>
	<h1>Tag Copied</h1>
	<p>Discord tag has been copied to clipboard. <br /><b>Shichiha#9757</b></p>
</Popup>
