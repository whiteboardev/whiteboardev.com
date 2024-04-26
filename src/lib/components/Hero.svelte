<script lang="ts">
	import * as Three from 'three';
	import { slide } from 'svelte/transition';
	import TechStack from './TechStack.svelte';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let showContactOptions: boolean = false;
	let contactOptionsElement: HTMLUListElement;

	function toggleContactOptions(): void {
		showContactOptions = !showContactOptions;
		if (contactOptionsElement) {
			setTimeout(() => {
				contactOptionsElement.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'nearest'
				});
			}, 100);
		}
	}

	onMount(() => {
		const scene = new Three.Scene();
		const camera = new Three.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
		const geometry = new Three.BoxGeometry(1, 1, 1);
		const lines = new Three.LineBasicMaterial({ color: 0x3e3f3f });
		const cube = new Three.LineSegments(geometry, lines);

		function animate() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		scene.background = new Three.Color(0xffffff);
		scene.add(cube);
		camera.position.z = 5;
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
		animate();
	});
</script>

<main id="main-section" class="container">
	<canvas bind:this={canvas}></canvas>
	<article id="hero" class="hero">
		<figure id="hero-image" class="w-full flex flex-center items-center">
			<img
				height="200"
				width="250"
				alt="Whiteboard Dev Logo"
				src="isomorphic_office.png"
				class="hero-image fade-down"
			/>
		</figure>
		<p id="hero-pre" class="hero-pre mt-4">I'm a Web Developer based in Brazil.</p>
		<h1 id="hero-title" class="hero-title fade-down delay-1s mt-4">Hey I'm JP.</h1>
		<p id="hero-summary" class="margin-0 fade-down delay-1s">
			I build and maintain web applications for 9 years, Bringing forth expertise in design,
			installation, testing and maintenance of web systems. Using JavaScript/TypeScript.
		</p>
		<TechStack className="fade-down delay-1s mt-4" />
		<section id="get-in-touch">
			<button
				type="button"
				id="cta-copy"
				class="cta-button fade-down delay-1s"
				on:click={toggleContactOptions}>Get in touch</button
			>
			{#if showContactOptions}
				<ul
					bind:this={contactOptionsElement}
					transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
					id="contact-items"
					class="contact-items"
				>
					<li class="contact-item">
						<a
							id="whatsapp-link"
							href="https://api.whatsapp.com/send?phone=+5584981830082&text=Hey,there!"
							target="_blank"
							class="contact-link wpp-link"
						>
							<img height="25" width="25" alt="Whatsapp Icon" src="icons/wpp.svg" class="wpp" />
							<p class="margin-0">Find me on my whatsapp!</p>
						</a>
					</li>
					<li class="contact-item">
						<a href="mailto:whiteboarddev@pm.me" target="_blank" class="contact-link email-link">
							<img height="25" width="25" alt="E-mail Icon" src="icons/mail.svg" class="css" />
							<p class="margin-0">Or send me an e-mail!</p>
						</a>
					</li>
				</ul>
			{/if}
		</section>
	</article>
</main>
