<script>
	const links = {
		GitHub: "https://github.com/matchmakerbot",
		Discord: "https://discord.com/invite/VYDTVR9HKC",
	};
</script>

<footer class="bg-deep-900 py-8 flex flex-col items-center mt-10 text-white z-10 relative">
	<div class="flex mb-8">
		{#each Object.entries(links) as [text, href]}
			<a class="mx-2 hover:underline" {href}>{text}</a>
		{/each}
	</div>
	<h1 class="text-sm text-sub mt-3">© 4977 B.C - {new Date().getFullYear()} Matchmaker Bot</h1>
</footer>
