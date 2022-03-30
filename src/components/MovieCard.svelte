<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CardProgressBar from '$lib/CardProgressBar.svelte';
	export let percentage;
	export let url;
	export let title;
	export let release_date;


	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click', {
			title,
		});
	}
</script>

<div class="w-full">
	<img
		src={url}
		alt=""
		class="w-full h-[225px] rounded-md cursor-pointer"
		on:click={handleClick}
	/>
	<div class="px-[10px] pt-6 pb-2 relative">
		<p
			class="text-base font-bold cursor-pointer hover:text-[#01b4e4]"
			on:click={handleClick}
		>
			{title}
		</p>
		<span class="text-[#00000099] text-base">{release_date}</span>
		<div class="absolute -top-5 left-2 flex items-center justify-center">
			<CardProgressBar percentage={percentage} />
		</div>
	</div>
</div>
