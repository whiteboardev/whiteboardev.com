<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	let lenis: Lenis;
	function getFrame(time: number) {
		lenis.raf(time);
		requestAnimationFrame(getFrame);
	}

	onMount(() => {
		lenis = new Lenis();
		requestAnimationFrame(getFrame);
	});
</script>

<svelte:head>
	<title>Whiteboard Dev</title>
	<link rel="icon" href="/favicon.ico" />
	<link rel="stylesheet" href="/css/main.css" />
	<script type="text/javascript" src="/js/lenis.js"></script>

	<!-- NOTE: Section for loading the fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap"
		rel="stylesheet"
	/>

	<!-- NOTE: Section for SEO meta tags -->
	<meta name="description" content="Whiteboard Dev portfolio website and lab for new tech." />

	<!-- NOTE: Section for Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@whiteboardev" />
	<meta name="twitter:title" content="Whiteboard Dev" />
	<meta name="twitter:description" content="Another web developer exploring..." />
	<meta name="twitter:image" content="https://avatars.githubusercontent.com/u/108155624?v=4" />

	<!-- NOTE: Section for Open Graph Protocol -->
	<meta property="og:title" content="Whiteboard Dev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://whiteboardev.com" />
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/108155624?v=4" />
</svelte:head>
<slot />
