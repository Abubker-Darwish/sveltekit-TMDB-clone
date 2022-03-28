<script lang="ts">
	import Logo from '$assets/logo-icon.svg';
	import HoverdPaper from '$lib/HoverdPaper.svelte';
	//   import {
	//   afterNavigate,
	//   beforeNavigate,
	//   disableScrollHandling,
	//   goto,
	//   invalidate,
	//   prefetch,
	//   prefetchRoutes
	// } from '$app/navigation';
</script>

<header class="fixed z-50 w-full h-16 bg-brand backdrop-blur">
	<div class="flex h-full items-center py-2">
		<div class="container flex items-center justify-between">
			<div class="flex items-center gap-4">
				<a href="/" class="w-36 h-5">
					<Logo />
				</a>
				<div class="flex items-center gap-1">
					<HoverdPaper>
						<span class="nav-item" slot="title">movies</span>
						<div slot="paper">
							<li class="popper-list-item"><a href="/movies">popular</a></li>
							<li class="popper-list-item"><a href="/movies/now_playing">now playing</a></li>
							<li class="popper-list-item"><a href="/movies/upcoming">upcoming</a></li>
							<li class="popper-list-item"><a href="/movies/top_rated">top rated</a></li>
						</div>
					</HoverdPaper>
					<HoverdPaper>
						<span class="nav-item" slot="title">TV shows</span>
						<div slot="paper">
							<li class="popper-list-item"><a href="/tv">popular</a></li>
							<li class="popper-list-item"><a href="/tv/airing_today">Airing Today</a></li>
							<li class="popper-list-item"><a href="/tv/on_tv">on tv</a></li>
							<li class="popper-list-item"><a href="/tv/top_rated">top rated</a></li>
						</div>
					</HoverdPaper>
					<HoverdPaper>
						<span class="nav-item" slot="title">people</span>
						<div slot="paper">
							<li class="popper-list-item"><a href="/person">popular people</a></li>
						</div>
					</HoverdPaper>
					<HoverdPaper>
						<span class="nav-item" slot="title">more</span>
						<div slot="paper">
							<li class="popper-list-item"><a href="/">Discussions</a></li>
							<li class="popper-list-item"><a href="/">Leaderboard</a></li>
							<li class="popper-list-item"><a href="/">Support</a></li>
							<li class="popper-list-item"><a href="/">API</a></li>
						</div>
					</HoverdPaper>
				</div>
			</div>
			<!-- ? right side -->
			<div class="flex items-center gap-4">
				<span class="lang-switcher"> EN </span>
				<a href="/login" class="py-1 nav-item capitalize">sign in</a>
				<!-- <button></button> -->
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	.nav-item {
		@apply capitalize text-base text-white cursor-pointer px-2 py-3;
	}
	.lang-switcher {
		@apply text-white text-xs p-1 border border-solid border-white rounded cursor-pointer;
	}
	.lang-switcher:hover {
		@apply text-brand bg-white;
	}

	.popper-list-item {
		@apply list-none; 
	}

	.popper-list-item:hover {
		@apply bg-slate-400/10; 
	}
	
	.popper-list-item > a {
		@apply py-1 text-black font-normal pl-5 capitalize block; 
	}
</style>
