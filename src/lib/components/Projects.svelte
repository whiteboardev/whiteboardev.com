<script lang="ts">
	export let projects: Array<Record<string, string | number | boolean>> = [];
</script>

<section id="projects" class="container flex flex-col flex-start">
	<h3 id="Projects Section">I'm currently working</h3>
	<ul id="projects" class="projects">
		{#each projects as project}
			<li id="project" class="project">
				<a href={project.html_url} target="_blank">
					<div class="flex flex-between">
						<h5>{project.name}</h5>
						<div>
							<span>{project.language}</span>
							<img
								height="50"
								width="50"
								src="/icons/github.svg"
								alt="Whiteboard Github Account Link"
								class="social icon"
							/>
						</div>
					</div>
					<p class="margin-0">{project.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
