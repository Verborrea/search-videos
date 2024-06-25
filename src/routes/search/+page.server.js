import { error } from "@sveltejs/kit"

export async function load({ url }) {

	const query = url.searchParams.get('query').toLowerCase()
	const res = await fetch(`https://whro5umnmb.execute-api.us-east-2.amazonaws.com/dev/Buscador/query?query=${query}`)
	
	if (!res.ok) {
		throw error(res.status)
	}
	
	const json = await res.json()
	
	return {
		query,
		videos: json.videos
	}
}