<script lang="ts">
	const basices = ['About TMDB', 'Contact Us', 'Support Forums', 'API', 'System Status'];

	const involved = ['Contribution Bible', 'Add New Movie', ' Add New TV Show'];

	const community = ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter'];

	const legal = ['Terms of Use', 'API Terms of Use', 'Privacy Policy'];
</script>

<footer class="bg-brand py-10">
	<div class="container">
		<div class="grid grid-cols-12 gap-5 md:gap-2">
			<div class="col-span-12 lg:col-span-4">
				<img
					src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
					alt=""
					class="w-40 h-20"
				/>
				<div class="h-6 w-0" />
				<button
					class="bg-white ml-6 px-4 py-2 rounded-md uppercase text-lg font-bold text-brand-100"
				>
					Join the Community
				</button>
			</div>
			<div class="ml-6 lg:ml-0 col-span-12 md:col-span-3 lg:md:col-span-2">
				<h5 class="title">THE BASICS</h5>
				{#each basices as item}
					<li class="list-item">
						<a href="/">{item} </a>
					</li>
				{/each}
			</div>
			<div class="ml-6 lg:ml-0 col-span-12 md:col-span-3 lg:md:col-span-2">
        <h5 class="title">GET INVOLVED</h5>
				{#each involved as item}
        <li class="list-item">
          <a href="/">{item} </a>
        </li>
				{/each}
			</div>
			<div class="ml-6 lg:ml-0 col-span-12 md:col-span-3 lg:md:col-span-2">
        <h5 class="title">COMMUNITY</h5>
				{#each community as item}
        <li class="list-item">
          <a href="/">{item} </a>
        </li>
				{/each}
			</div>
      <div class="ml-6 lg:ml-0 col-span-12 md:col-span-3 lg:md:col-span-2">
        <h5 class="title">LEGAL</h5>
        {#each legal as item}
          <li class="list-item">
            <a href="/">{item} </a>
          </li>
        {/each}
      </div>
		</div>
	</div>
</footer>

<style lang="postcss">
  .title {
    @apply text-xl text-white font-bold mb-1;
  }

  .list-item {
    @apply list-none text-white font-normal text-lg;
  }
</style>