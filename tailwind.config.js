/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./App.{js,jsx}",
		"./src/**/*.{js,jsx}",
		"./src/screens/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				...colors,
				ash: "#3c6072",
				blue: {
					500: "#008cc9",
				},
				orange: "#e99265",
			},
		},
	},
	plugins: [],
};
