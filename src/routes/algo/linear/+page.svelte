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
		target = 0;
	}

	function binarySearch(): void {
		let high = numbers.length;
		let low = 0;
		do {
			let middle = Math.floor((high - low) / 2);
			let value = numbers[middle];

			console.log('Target: ', target);
			console.log('Value: ', value);

			if (value === target) {
				console.log(middle);
				paint(middle);
			} else if (value > target) {
				console.log('Higher');
				high = middle;
			} else {
				console.log('Lesser');
				low = middle + 1;
			}
		} while (low < high);
	}

	function linearSearch(): void {
		for (let index = 0; index < numbers.length; index++) {
			if (numbers[index] === target) {
				paint(index);
			}
		}
	}

	function paint(index: number): void {
		const element = document.querySelector('#item-' + numbers[index].toString());
		element?.classList.add('green');
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}
</script>

<Page>
	<Header />
	<div class="page">
		<h1>Searches</h1>
		<input type="number" bind:value={target} />
		<button type="button" on:click={binarySearch}>Search</button>
		<button type="button" on:click={reset}>Reset</button>
		<ul class="numbers">
			{#each numbers as number}
				<li id={'item-' + number.toString()} class="number">{number}</li>
			{/each}
		</ul>
	</div>
</Page>
