<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Header from '$lib/components/Header.svelte';

	function generateRandomNumbers(range: number): number[] {
		return Array.from({ length: range }, (_, index) => index + 1);
	}

	let numbers = generateRandomNumbers(Math.floor(Math.random() * 1000));
	let target: number = 0;

	function reset(): void {
		numbers = generateRandomNumbers(Math.floor(Math.random() * 1000));
	}

	function linearSearch() {
		for (let index = 0; index < numbers.length; index++) {
			const element = document.querySelector('#item-' + numbers[index].toString());
			if (numbers[index] === target) {
				element?.classList.add('green');
				element?.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			}
		}
	}
</script>

<Page>
	<Header />
	<div class="page">
		<h1>Searches</h1>
		<input type="number" bind:value={target} />
		<button type="button" on:click={linearSearch}>Search</button>
		<button type="button" on:click={reset}>Reset</button>
		<ul class="numbers">
			{#each numbers as number}
				<li id={'item-' + number.toString()} class="number">{number}</li>
			{/each}
		</ul>
	</div>
</Page>
