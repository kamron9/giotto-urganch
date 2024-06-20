export const fetcher = async (url: string) => {
	return fetch('https://admin.giotto-urgench.uz/api/v1/shop' + url).then(res =>
		res.json()
	)
}
