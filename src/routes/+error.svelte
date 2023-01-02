<script>
	import { page } from '$app/stores';

	import Icon from '@iconify/svelte';
</script>

<main class="grid place-items-center">
	<div class="flex flex-col">
		<div class="inline-flex place-items-center gap-4">
			<Icon icon="carbon:warning-alt" class="w-10 h-10" />
			<h1>Page {$page.error?.message}</h1>
		</div>
		<div class="inline-flex place-items-center gap-4">
			<Icon icon="carbon:arrow-left" class="w-10 h-10" />
			<h1><a href="/" class="text-blue-500">Back to homepage</a></h1>
		</div>
	</div>
</main>
