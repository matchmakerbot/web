<script lang="ts">
	import "virtual:windi.css";
</script>

<slot />

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Carter+One&family=Lato:wght@400;700&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap");
	body {
		@apply bg-deep-800;
		scrollbar-width: 0;
		overflow-x: hidden;
		touch-action: pan-y;
	}
</style>
