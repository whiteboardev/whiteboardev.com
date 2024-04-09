<script lang="ts">
	import { onMount } from 'svelte';
	import * as Three from 'three';
	import WebGL from 'three/addons/capabilities/WebGL';
	import SocialIcons from './SocialIcons.svelte';

	let threeContainer;
	let scene;
	let camera;
	let renderer;
	let line;
	let material;
	let geometry;

	function animate() {
		requestAnimationFrame(animate);
	}
	onMount(() => {
		if (WebGL.isWebGLAvailable()) {
			// NOTE: Declaring scene, camera and renderer
			camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
			camera.position.set(0, 0, 100);
			camera.lookAt(0, 0, 0);
			scene = new Three.Scene();
			renderer = new Three.WebGLRenderer();

			material = new Three.LineBasicMaterial({ color: 0x0000ff });

			const points = [];
			points.push(new Three.Vector3(-10, 0, 0));
			points.push(new Three.Vector3(0, 10, 0));
			points.push(new Three.Vector3(10, 0, 0));

			geometry = new Three.BufferGeometry().setFromPoints(points);

			line = new Three.Line(geometry, material);

			renderer.setSize(window.innerWidth, window.innerHeight);

			threeContainer.appendChild(renderer.domElement);
			scene.add(line);
			renderer.render(scene, camera);

			animate();
		}
	});
</script>

<main id="main-section" class="container">
	<div bind:this={threeContainer}></div>

	<!-- TODO: Work on a better hero section copy -->
	<article id="hero" class="hero">
		<figure id="hero-image">
			<img
				height="200"
				width="200"
				alt="Whiteboard Dev Logo"
				src="https://avatars.githubusercontent.com/u/108155624?v=4"
				class="hero-image"
			/>
		</figure>
		<h1 id="hero-title" class="fade-down delay-1s">Hello I'm a Front End Developer</h1>
		<p id="hero-summary" class="margin-0 fade delay-1-5s">
			A little bit about me.. I build and maintain web applications for 9 years, Bringing forth
			expertise in design, installation, testing and maintenance of web systems. Using
			JavaScript/TypeScript.
		</p>
		<button type="button" id="cta-button" class="cta-button delay-2s"> Get in touch! </button>
		<SocialIcons className="flex-sm fade-down delay-2-5s" />
	</article>
</main>
