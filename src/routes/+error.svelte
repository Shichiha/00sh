<script>
	import { page } from '$app/stores';
	const gyuu = ['＞︿＜', '⊙﹏⊙∥', 'X﹏X', '（＞人＜；）'];
	// ぎゅうう～ （＞人＜；）
	let gyuuIndex = Math.floor(Math.random() * gyuu.length);
</script>

<div class="content">
	<h1>
		<span style="color:#ff554f">{$page.status} ー</span>
		<span style="color:#ff6a75"
			>{$page.error?.message} <span class="kaomoji">{gyuu[gyuuIndex]}</span></span
		>
	</h1>
</div>
