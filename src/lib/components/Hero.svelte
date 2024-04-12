<script lang="ts">
	import TechStack from './TechStack.svelte';
</script>

<main id="main-section" class="container">
	<!-- TODO: Work on a better hero section copy -->
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
		<button type="button" id="cta-button" class="cta-button delay-2s"> Get in touch! </button>
	</article>
</main>
