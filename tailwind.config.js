/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./docs/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'duck': 'url(/docs/images/duck.png)'
			}
		},
		fontFamily: {
			body: ['Roboto']
		}
	},
	plugins: [],
};
