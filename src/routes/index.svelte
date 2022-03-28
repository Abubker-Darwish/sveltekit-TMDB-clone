<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch }) => {
		let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${variables?.basePath}`;
		const res = await fetch(url);
		const trending = await res.json();
		let url2 = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${variables?.basePath}`;
		
		const res2 = await fetch(url2);
		const popular = await res2.json();
		return {
			props: { trending: trending?.results, popular: popular?.results }
		};
	};
</script>

<script lang="ts">
	import Hero from '$components/Hero/index.svelte';
	import Trending from '$screens/Home/Trending.svelte';
	import Popular from '$screens/Home/Popular.svelte';

	export let trending = [];
	export let popular = [];
</script>

<div class="">
	<Hero />
	<div class="h-8 w-0" />
	<div class="container">
		<Trending list={trending} />
		<div class="h-9 w-0" />
		<Popular list={popular} />
		<div class="h-9 w-0" />
	</div>
</div>

<!-- <style lang="postcss">

</style> -->

