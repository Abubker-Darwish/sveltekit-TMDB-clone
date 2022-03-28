<script lang="ts">
  import { goto } from "$app/navigation";

	let search = '';

  const handleSearch = () => {
    goto(`/search?item=${search}`)
  }
</script>

<div class="h-80 bg-hero-pattern bg-cover bg-opacity-10 flex items-center">
	<div class="container">
		<h1 class="text-5xl text-white font-bold">Welcome</h1>
		<h5 class="text-[28px] text-white font-semibold mt-[1px]">
			Millions of movies, TV shows and people to discover. Explore now.
		</h5>
		<div class="mt-9">
			<div class="search-box">
				<input
					bind:value={search}
					on:change={(e) => {
						search = e.currentTarget.value;
					}}
          placeholder="Search for a movie, tv show, person......"
					class="bg-transparent flex-1 outline-none py-2 px-4 h-full w-full"
				/>
				
				<button class="search-btn" on:click={handleSearch}>search</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.search-btn {
		background-image: linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%);
		@apply py-2 px-6 bg-green-400 h-full rounded-full text-base font-semibold text-white;
	}
	.search-box {
		@apply bg-white w-full rounded-full flex items-center h-12;
	}
</style>
