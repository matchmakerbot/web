<script>
	export let title;
	export let x;
	export let y;
</script>
<div class="font-sans font-bold" style="
		top: {y + 10}px;
		left: {x + 70}px;">{title}</div>

<style>
	div {
		box-shadow: 3px 3px 3px #273461;
		background: #1A2240;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
        color: white;
	}
</style>