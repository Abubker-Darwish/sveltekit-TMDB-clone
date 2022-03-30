<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch }) => {
		let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${variables?.basePath}`;
		const res = await fetch(url);
		const now_playing = await res.json();

		return {
			props: { nowPlayingMovies: now_playing?.results }
		};
	};
</script>

<script lang="ts">
	import CardMovie from '$components/MovieCard.svelte';
	import { onMount } from 'svelte';
	import { nowPlayingMovie } from '$stores/Movies/now_playing';
	import { goto } from '$app/navigation';

	export let nowPlayingMovies = [];

	onMount(() => {
		nowPlayingMovie.setMovies(nowPlayingMovies);
	});
</script>

<div class="bg-white min-h-screen py-8">
	<div class="container">
		<h1 class="text-2xl font-semibold">Now Playing Movies</h1>
		<div class="w-0 h-4" />
		<div class="list-box">
			{#each $nowPlayingMovie.list as item}
				{@const path = `/movies/${item.id}-${item.original_title
					?.replace(' ', '_')
					?.toLowerCase()}`}

				<div class="shadow rounded">
					<CardMovie
						url="https://www.themoviedb.org/t/p/w440_and_h660_face/{item.poster_path}"
						title={item.title}
						percentage={item.vote_average * 10}
						release_date={item?.release_date}
						on:click={() => {
							goto(path);
						}}
					/>
				</div>
			{/each}
		</div>
		<div class="w-0 h-4" />
		<button
			class="load_more_btn"
			on:click={() => nowPlayingMovie.loadMore($nowPlayingMovie.page + 1)}
		>
			{$nowPlayingMovie.fetching ? 'loading ...' : 'load more'}
		</button>
	</div>
</div>

<style lang="postcss">
	.list-box {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		@apply grid gap-5;
	}
</style>
