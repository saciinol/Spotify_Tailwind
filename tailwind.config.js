/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./docs/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'duck': 'url(/images/duck.png)'
			}
		},
		fontFamily: {
			body: ['Roboto']
		}
	},
	plugins: [],
};
