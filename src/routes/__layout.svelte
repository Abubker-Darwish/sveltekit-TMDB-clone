<script>
	import { navigating } from '$app/stores';

	import '../app.css';
	import Header from '$components/Header/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import ProgressBar from 'svelte-progress-bar';

	let progress;
	let started = false;

	$: loading = new Promise((resolver) => setTimeout(() => resolver(!!$navigating), 1000));

	$: loading.then((value) => {
		if (value) {
			progress?.start();
			started = true;
		} else if (!value && started) {
			progress?.complete();
			started = false;
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="h-full relative">
	<Header />
	<main class="min-h-screen bg-slate-50 pt-16">
		<slot />
	</main>
	<Footer />
	<ProgressBar bind:this={progress} color="#01b4e4" width="100%" />
</div>
