<script>
	import Icon from '@iconify/svelte';
	import Popup from '$components/Popup.svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import Confirm from '$components/Confirm.svelte';
	// let discordPopup = false;
	let p = {
		github: false,
		discord: false,
		twitter: false,
		gmail: false
	};
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col">
		<h1 class="bg-black text-white max-w-fit px-2">Reach me at</h1>
		<div class="flex flex-row gap-4">
			<Tooltip>
				<!-- href="https://github.com/Shichiha" -->
				<button slot="trigger" class="border-none bg-white" on:click={()=>p.github=true}>
					<Icon icon="logos:github-icon" class="w-10 h-10" />
				</button>
				<span>Github</span>
			</Tooltip>
			<Tooltip>
				<button
					slot="trigger"
					class="border-none bg-white"
					on:click={() => {
						navigator.clipboard.writeText('Shichiha#9757');
						p.discord = true;
					}}
				>
					<Icon icon="logos:discord-icon" class="w-10 h-10" />
				</button>
				<span>Discord</span>
			</Tooltip>
			<Tooltip>
				<!-- href="https://twitter.com/00sh_chiha" -->
				<button slot="trigger" class="border-none bg-white" on:click={()=>p.twitter=true}>
					<Icon icon="logos:twitter" class="w-10 h-10" />
				</button>
				<span>Twitter</span>
			</Tooltip>
			<Tooltip>
				<!-- href="mailto:00sh.chiha@gmail.com" -->
				<button slot="trigger" class="border-none bg-white" on:click={()=>p.gmail=true}>
					<Icon icon="logos:google-gmail" class="w-10 h-10" />
				</button>
				<span>Gmail</span>
			</Tooltip>
		</div>
	</div>
</div>

<Popup bind:show={p.discord}>
	<h1>Tag Copied</h1>
	<p>Discord tag has been copied to clipboard. <br /><b>Shichiha#9757</b></p>
</Popup>

<Confirm bind:show={p.github} confirmFunction={() => window.open('https://github.com/Shichiha', '_blank')}>
	<h1>Forwarding to Github</h1>
	<p>You will be forwarded to 
		<code class="text-blue-400">https://github.com/Shichiha</code>
	</p>
</Confirm>

<Confirm bind:show={p.twitter} confirmFunction={() => window.open('https://twitter.com/00sh_chiha', '_blank')}>
	<h1>Forwarding to Twitter</h1>
	<p>You will be forwarded to 
		<code class="text-blue-400">https://twitter.com/00sh_chiha</code>
	</p>
</Confirm>

<Confirm bind:show={p.gmail} confirmFunction={() => window.open('mailto:00sh.chiha@gmail.com')}>
	<h1>Forwarding to Gmail</h1>
	<p>You will be forwarded to 
		<code class="text-blue-400">mailto:00sh.chiha@gmail.com</code>
	</p>
</Confirm>