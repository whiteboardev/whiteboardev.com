// import { Octokit } from 'octokit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	try {
		/*
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
		*/
		return {
			repositories: [{ name: 'nvio', description: 'lorem ipsum dolor sit amet' }, { name: 'whiteboardev.com', description: 'consectetur adipiscing elit' }]
		}
	}
	catch (error) {
		console.error(error)
		return {
			repositories: [{ name: 'nvio' }, { name: 'whiteboardev.com' }]
		}
	}
}
