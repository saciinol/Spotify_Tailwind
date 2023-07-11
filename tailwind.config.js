/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
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
