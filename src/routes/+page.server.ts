import { Octokit } from 'octokit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {

	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN
	});

	const repositories = await octokit.request('GET /users/{username}/repos', {
		username: 'whiteboardev',
		headers: {
			'X-Github-Api-Version': '2022-11-28'
		}
	});

	return {
		repositories: repositories.data
	}
}
