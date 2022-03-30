<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch }) => {
		let url = `https://api.themoviedb.org/3/tv/popular?api_key=${variables?.basePath}`;
		const res = await fetch(url);
		const popular = await res.json();

		return {
			props: { popularTVs: popular?.results }
		};
	};
</script>

<script lang="ts">
	import CardMovie from '$components/MovieCard.svelte';
	import { onMount } from 'svelte';
	import { popularTV } from '$stores/tv/popular';
	import { goto } from '$app/navigation';

	export let popularTVs = [];

	onMount(() => {
		popularTV.setMovies(popularTVs);
	});
</script>

<div class="bg-white min-h-screen py-8">
	<div class="container">
		<h1 class="text-2xl font-semibold">Popular TV Shows</h1>
		<div class="w-0 h-4" />
		<div class="list-box">
			{#each $popularTV.list as item}
				{@const path = `/tv/${item.id}-${item.original_name
					?.replace(' ', '_')
					?.toLowerCase()}`}

				<div class="shadow rounded ">
					<CardMovie
						url="https://www.themoviedb.org/t/p/w440_and_h660_face/{item.poster_path}"
						title={item.name}
						percentage={item.vote_average * 10}
						release_date={item?.first_air_date}
						on:click={() => {
							goto(path);
						}}
					/>
				</div>
			{/each}
		</div>
		<div class="w-0 h-4" />
		<button class="load_more_btn" on:click={() => popularTV.loadMore($popularTV.page + 1)}>
			{$popularTV.fetching ? 'loading ...' : 'load more'}
		</button>
	</div>
</div>

<style lang="postcss">
	.list-box {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		@apply grid gap-5;
	}
</style>
