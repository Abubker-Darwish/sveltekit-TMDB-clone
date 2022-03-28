<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch, url, ...rest }) => {
		const item = url.searchParams.get('item');
		let path = `https://api.themoviedb.org/3/search/multi?api_key=${variables?.basePath}&query=${item}`;
		const res = await fetch(path);
		const search = await res.json();

		return {
			props: { result: search?.results }
		};
	};
</script>

<script lang="ts">
	import { baseImgUrl } from '$helpers/api';

	export let result = [];
</script>

<div class="bg-white min-h-screen py-8">
	<div class="container">
		<div class="space-y-3">
			{#each result as item}
				{@const movies = item?.known_for?.map((ite) => ite.name || ite.title).join(', ') || ''}

				<div
					class="shadow-md border border-solid border-slate-200 rounded flex items-stretch overflow-hidden"
				>
					<div class="shrink-0 w-28 h-36">
						<img
							src={baseImgUrl + (item.poster_path || item.profile_path)}
							alt=""
							class="w-full h-full"
						/>
					</div>
					<div class="flex-1 px-4 py-3">
						<div class="mb-1 flex items-center justify-between">
							<h4 class="text-lg font-semibold">{item.title || item.name}</h4>
							<div class="bg-success py-1 px-2 rounded text-white text-sm">
								{item.media_type}
							</div>
						</div>
						<span class="line-clamp-2 text-base font-normal text-gray-400" title={item.overview}>
							{#if item.media_type === 'person'}
								<span class="text-gray-500">acting of</span> {movies}
							{:else}
								{item.overview}
							{/if}
						</span>
					</div>
				</div>
			{/each}
		</div>
		<div class="w-0 h-4" />
		<!-- <button class="load_more_btn" on:click={() => airingTodayTV.loadMore($airingTodayTV.page + 1)}>
			{$airingTodayTV.fetching ? 'loading ...' : 'load more'}
		</button> -->
	</div>
</div>

<style lang="postcss">
</style>
