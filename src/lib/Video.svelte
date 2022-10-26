<script lang="ts">
	let iframe: HTMLIFrameElement;
	let videoId = 'afdKHoEtFic';
	let videoUrl = `https://www.youtube.com/embed/${videoId}?playsinline=1&controls=0&loop=1&disablekb=1&rel=0&start=0&enablejsapi=1&autoplay=1&hl=jp&origin=https://00sh.cf&fs=0`;
</script>

<div class="video-background">
	<iframe
		bind:this={iframe}
		title="video"
		src={videoUrl}
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>

<style lang="sass">
.video-background 
  position: fixed
  overflow: hidden
  width: 100vw
  height: 100vh
  z-index: -2

.video-background iframe 
  position: absolute
  top: 50%
  left: 50%
  width: 100%
  height: 100%
  transform: translate(-50%, -50%)
  pointer-events: none

@media (min-aspect-ratio: 16/9) 
  .video-background iframe 
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw
  

@media (max-aspect-ratio: 16/9) 
  .video-background iframe 
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh
  

</style>
