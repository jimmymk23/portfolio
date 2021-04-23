module.exports = {
	future: {
		webpack5: true,
	},
	devIndicators: {
		autoPrerender: true,
	},
	async redirects() {
		return [
			{
				source: '/portfolio',
				destination: '/',
				permanent: true,
			},
			{
				source: '/ig',
				destination: 'https://instagram.com/jimmymk23',
				permanent: true,
			},
			{
				source: '/sc',
				destination: 'https://www.snapchat.com/add/jimmymk23',
				permanent: true,
			},
		];
	},
};
