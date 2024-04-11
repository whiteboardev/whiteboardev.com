<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';
	import TechStack from './TechStack.svelte';
</script>

<main id="main-section" class="container">
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
		<TechStack />
	</article>
</main>
