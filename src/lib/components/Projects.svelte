<script lang="ts">
	export let projects: Array<Record<string, string | number | boolean>> = [];
</script>

<section id="projects" class="container flex flex-col flex-start">
	<h4 id="Projects Section">Some projects.</h4>
	<ul id="projects" class="projects">
		{#each projects as project}
			<li id="project" class="project">
				<a href={project.html_url} target="_blank">
					<div class="flex flex-between">
						<p class="margin-0">
							{project.name}
							<br />
							<small class="margin-0">{project.description}</small>
						</p>
						<img
							height="50"
							width="50"
							src="/icons/github.svg"
							alt={project.name}
							class="social icon"
						/>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
