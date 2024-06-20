/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'admin.giotto-urgench.uz',
			},
		],
	},
}

export default nextConfig
