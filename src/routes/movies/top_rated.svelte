<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch }) => {
		let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${variables?.basePath}`;
		const res = await fetch(url);
		const topRated = await res.json();

		return {
			props: { topRatedMovies: topRated?.results }
		};
	};
</script>

<script lang="ts">
	import CardMovie from '$components/MovieCard.svelte';
	import { onMount } from 'svelte';
	import { topRatedMovie } from '$stores/Movies/top_rated';

	export let topRatedMovies = [];

	onMount(() => {
		topRatedMovie.setMovies(topRatedMovies)
	})
</script>

<div class="bg-white min-h-screen py-8">
	<div class="container">
		<h1 class="text-2xl font-semibold">Top Rated Movies</h1>
		<div class="w-0 h-4" />
		<div class="list-box">
			{#each $topRatedMovie.list as item}
				<div class="shadow rounded" >
					<CardMovie
						url="https://www.themoviedb.org/t/p/w440_and_h660_face/{item.poster_path}"
						title={item.title}
            percentage={item.vote_average * 10}
					/>
				</div>
			{/each}
		</div>
		<div class="w-0 h-4" />
		<button class="load_more_btn" on:click={() => topRatedMovie.loadMore($topRatedMovie.page + 1)}>
			{$topRatedMovie.fetching ? 'loading ...' : 'load more'}
		</button>
	</div>
</div>

<style lang="postcss">
  .list-box {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    @apply grid gap-5;
  }
</style>
