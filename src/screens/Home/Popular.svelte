<script lang="ts">
	import MovieCard from '$components/MovieCard.svelte';
	// import { variables } from '$helpers/variable';

	export let list = [];
	// export let trendingPeriod = 'on_the_air';

	const handlePopularApiCall = async () => {
		// console.log('val', val);
		// const url = `https://api.themoviedb.org/3/trending/all/${val}?api_key=${variables?.basePath}`;
		// const res = await fetch(url);
		// const { results } = await res.json();

		// list = results;
	};
</script>

<div class="flex items-center gap-3 mb-5 ">
	<h1 class="section-title">What's Popular</h1>
	<!-- <div
		class="h-[30px] flex items-center border border-solid border-slate-800 rounded-3xl overflow-hidden"
	>
		<div
			class="px-5 py-1 cursor-pointer"
			on:click={() => {
				trendingPeriod = 'on_the_air';
				handlePopularApiCall('on_the_air');
			}}
			class:active={trendingPeriod === 'on_the_air'}
		>
			<span class="text-sm">on TV</span>
		</div>
		<div
			class="px-5 py-1 cursor-pointer"
			class:active={trendingPeriod === 'day'}
			on:click={() => {
				trendingPeriod = 'day';
				handlePopularApiCall('day');
			}}
		>
			<span class="text-sm">Day</span>
		</div>
	</div> -->
</div>
<div class="relative">
	<div class="list-container scroll-x">
		{#each list as item}
			<div class="snap-always snap-center shrink-0 w-[150px]">
				<MovieCard
					{item}
					url="https://www.themoviedb.org/t/p/w440_and_h660_face/{item.poster_path}"
					title={item.title || item.name}
					percentage={item?.vote_average * 10}
					release_date={item?.release_date || item?.first_air_date}
				/>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.list-container {
		@apply snap-x snap-normal flex flex-nowrap gap-5 overflow-x-auto bg-section-img bg-no-repeat bg-bottom;
	}

	.list-container::after {
		@apply content-[''] w-5 h-full absolute inset-y-0 right-0 bg-gradient-to-r from-gray-50/10 to-white/80;
	}
	/* .active {
		@apply bg-brand text-white rounded-2xl pointer-events-none;
	} */
</style>
