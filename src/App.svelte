<script>
	import { Router, Route, Link } from "svelte-navigator";
	import AAA from "./routes/index.svelte";
</script>

<Router>
	<header>
		<h1>History</h1>

		<nav>
			<Link to="/">Index</Link>
			<Link to="about">About</Link>
			<Link to="profile">Profile</Link>
		</nav>
	</header>

	<main>
		<Route path="/">
			<AAA/>
		</Route>
	</main>
</Router>
