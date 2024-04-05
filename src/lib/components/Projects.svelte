<script lang="ts">
	export let projects: Array<Record<string, string | number | boolean>> = [];
</script>

<section id="projects" class="container">
	<h3>This are my personal projects that I'm currently working on</h3>
	<ul id="projects">
		{#each projects as project}
			<li>
				<h4>{project.name}</h4>
				<p>{project.description}</p>
			</li>
		{/each}
	</ul>
</section>
