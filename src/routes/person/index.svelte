<script context="module">
	import { variables } from '$helpers/variable';

	export const load = async ({ fetch }) => {
		let url = `https://api.themoviedb.org/3/person/popular?api_key=${variables?.basePath}`;
		const res = await fetch(url);
		const persons = await res.json();

		return {
			props: { list: persons?.results }
		};
	};
</script>

<script lang="ts">
	export let list = [];
</script>

<div class="bg-white min-h-screen py-8">
	<div class="container">
		<h1 class="text-2xl font-semibold">Popular People</h1>
		<div class="w-0 h-4" />
		<div class="list-box">
			{#each list as item}
				{@const movies = item.known_for.map((ite) => ite.name || ite.title).join(', ')}
				<div class="item-card">
					<img src="https://www.themoviedb.org/t/p/w470_and_h470_face{item.profile_path}" alt="" />
					<div class="px-2 py-3">
						<h5 class="text-lg font-semibold">{item.name}</h5>
						<span class="line-clamp-1">
							{movies},
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.list-box {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		@apply grid gap-5;
	}
	.item-card {
		@apply rounded overflow-hidden border-solid border border-slate-200 shadow;
	}
	.item-card > img {
		@apply w-full h-64;
	}
</style>
