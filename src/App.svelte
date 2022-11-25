<script>
	import { Router, Route, link, back } from 'svelte-routering'
</script>

<Router>
	<Route path="/">
		<a href="/about" use:link>about</a>
	</Route>

	<Route path="/about">
		<button on:click={back}>back</button>
	</Route>
</Router>
