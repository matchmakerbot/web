<script>
	import Navbar from "$lib/components/navbar.svelte";
	import DiscordButton from "$lib/components/discordButton.svelte";
	import Footer from "$lib/components/footer.svelte";
	import MainPageInfo from "$lib/components/mainPageInfo.svelte";
</script>

<img
	src="../../../static/mainPageIcons/topGreenEllipse.png"
	class="absolute left-[-200px]"
	alt=""
/>
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
		<div class="flex mb-20 z-1 relative">
			<img src="/mainPageIcons/phoneGreenEclipse.png" class="mt-10" alt="Eclipse" />
			<img
				src="/mainPageIcons/phoneOrangeEllipse.png"
				class="absolute ml-10 lg:ml-20"
				alt="Eclipse"
			/>
			<img src="/mainPageIcons/phone.png" class="absolute ml-10 lg:ml-30" alt="Phone" />
			<img src="/mainPageIcons/rocketLeague.png" class="absolute ml-75 mt-10" alt="" />
			<img src="/mainPageIcons/phone.png" class="absolute mt-8" alt="Phone" />
			<img src="/mainPageIcons/valorant.png" class="absolute mt-32 ml-12" alt="" />
			<img
				src="/mainPageIcons/rectangle1.png"
				id="movingRec"
				class="absolute <lg:mt-5 ml-15"
				alt=""
			/>
			<img
				src="/mainPageIcons/rectangle2.png"
				id="movingRec"
				class="absolute <lg:ml-10 mt-100"
				alt=""
			/>
			<img
				src="/mainPageIcons/rectangle4.png"
				id="movingRec"
				class="absolute mt-80 ml-80 lg:ml-130"
				alt=""
			/>
			<img
				src="/mainPageIcons/rectangle3.png"
				id="movingRec"
				class="absolute mt-100 ml-70 lg:ml-110"
				alt=""
			/>
		</div>
		<img
			src="../../../static/mainPageIcons/rightOrangeEllipse.png"
			class="absolute right-[-200px] mt-50 z-0 object-pos <lg:hidden"
			alt=""
		/>
		<!--increase margin top and try to not make it increase page size-->
	</div>
</div>
<MainPageInfo
	title="Commands at the palm of your hand"
	description=" The bot features multiple commands with the ability to play games with random teams or captains, check the channel's leaderboards and reset said leaderboards, the list just keeps getting bigger and bigger!"
/>
<Footer />

<style>
	#movingRec {
		-webkit-animation: mover 1s infinite alternate;
		animation: mover 1s infinite alternate;
	}

	@keyframes mover {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-10px);
		}
	}
</style>
