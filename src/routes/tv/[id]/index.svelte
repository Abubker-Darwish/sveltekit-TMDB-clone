<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch, params }) => {
		const id = params.id.split('-')[0];

		const path = `https://api.themoviedb.org/3/tv/${id}?api_key=${variables?.basePath}`;
		const res = await fetch(path);
		const tv = await res.json();

		return {
			props: { tv }
		};
	};
</script>

<script lang="ts">
	import { baseImgUrl, coverImgUrl } from '$helpers/api';
	import { format } from 'date-fns';
	import CardProgressBar from '$lib/CardProgressBar.svelte';

	export let tv: any ;
</script>

<div class="bg-white min-h-screen">
	<div
		class="relative cover-box min-h-screen w-full bg-cover"
		style="background-image: url({coverImgUrl}{tv.backdrop_path});"
	>
		<div class="absolute h-full z-[1] w-full p-8 flex items-center ">
			<div class="flex items-center gap-5">
				<img src="{baseImgUrl}{tv?.poster_path}" alt="" class="w-[300px] h-[450px] rounded-lg" />
	
				<div class="flex-1 items-center place-self-stretch">
					<h1 class="text-3xl font-bold text-white">
						{tv.name}
						<span class="font-medium text-white/70">
							{format(new Date(tv.first_air_date), '(yyyy)')}
						</span>
					</h1>
					<div class="flex items-center gap-2 mt-1 text-white text-base">
						<span>
							{format(new Date(tv.first_air_date), 'dd/MM/yyyy')} (AS)
						</span>
	
						<span>
							{tv?.genres?.map((it) => it.name).join(', ')}
						</span>
	

					</div>
					<div class="h-10 w-0" />
	
					<div class="ml-3 flex">
						<div class="w-fit scale-125">
							<CardProgressBar percentage={tv?.vote_average * 10} />
						</div>
					</div>
	
					<div class="mt-4">
						<h2 class="text-white text-xl font-medium">Overview</h2>
						<p  class="text-white/75 text-base font-medium">{tv?.overview}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.cover-box::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			rgba(31.5, 31.5, 31.5, 1) 150px,
			rgba(31.5, 31.5, 31.5, 0.84) 100%
		);
		top: 0;
		right: 0;
	}
</style>
