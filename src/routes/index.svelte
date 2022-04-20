<script>
	import Navbar from "$lib/components/navbar.svelte";
	import DiscordButton from "$lib/components/discordButton.svelte";
	import Footer from "$lib/components/footer.svelte";
	import MainPageInfo from "$lib/components/mainPageInfo.svelte";
</script>

<img src="../../../static/mainPageIcons/aaa.png" class="absolute left-[-200px]" alt="" />
<Navbar />
<div>
	<div
		class="flex <lg:flex-col justify-center lg:justify-evenly lg:mt-20 flex-wrap lg:ml-10 items-center"
	>
		<div class="mt-15">
			<h1 class="text-5xl lg:text-6xl heading text-white w-[9ch] lg:w-[11ch]">
				Create your own ranking systems in Discord
			</h1>
			<p class="lg:text-xl text-gray-300 w-[40ch] lg:w-[50ch] mt-5">
				Creating your own custom rankup system was never easier, just add our bot to your server and
				let the fun begin!
			</p>
			<div class="flex mt-5">
				<DiscordButton />
				<button class="bg-deep-500 text-white lg:text-xl rounded-lg items-center p-3 ml-5">
					Invite bot to server</button
				>
			</div>
		</div>
		<div class="flex mb-20">
			<img src="../../../static/greenEclipse.png" alt="Eclipse" />
			<div class="absolute ml-20">
				<img src="../../../static/Phone.png" alt="Phone" />
			</div>
			<div class="absolute mt-8">
				<img src="../../../static/Phone.png" alt="Phone" />
			</div>
		</div>
		<img src="../../../static/mainPageIcons/bbb.png" class="absolute right-[-200px] mt-150 z-[-1]" alt="" />
	</div>
</div>
<MainPageInfo
	title="Commands at the palm of your hand"
	description=" The bot features multiple commands with the ability to play games with random teams or captains, check the channel's leaderboards and reset said leaderboards, the list just keeps getting bigger and bigger!"
/>
<Footer />