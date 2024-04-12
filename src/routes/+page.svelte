<script lang="ts">
	import type { PageData } from './$types';
	import Page from '$lib/components/Page.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';

	// NOTE:: Props Declaration
	export let data: PageData;
</script>

<Page>
	<Header />
	<div class="page">
		<Hero />
		<Projects projects={data.repositories} />
	</div>
</Page>
