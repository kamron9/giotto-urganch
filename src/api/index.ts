import { useQuery } from 'react-query'
import { apiUrl } from '../contants/urls'

const getData = <T>(slug: string) => {
	const get = async () => {
		const response = await fetch(`${apiUrl}${slug}`)
		const data: T = await response.json()
		return data
	}
	return useQuery(slug, () => get())
}
export { getData }
