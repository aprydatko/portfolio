const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	i18n: {
		locales: ['en', 'ru', 'uk'],
		defaultLocale: 'en',
		localeDetection: false,
		domains: [
			{
				domain: 'example.com',
				defaultLocale: 'en',
			},
			{
				domain: 'example.com.ru',
				defaultLocale: 'ru',
			},
			{
				domain: 'example.com.uk',
				defaultLocale: 'uk',
				http: true,
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		});

		return config;
	},
	webpack5: false,
});