module.exports = {
	future: {
		webpack5: true,
	},
	devIndicators: {
		autoPrerender: false,
	},
	async redirects() {
		return [
			{
				source: '/portfolio',
				destination: '/',
				permanent: true,
			},
		];
	},
};
