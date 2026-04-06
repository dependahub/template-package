/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		name: 'global-ignores',
		ignores: [
			'@types/**',
		],
	},
	{
		name: 'project-rules',
		rules: {
			'capitalized-comments': 'off',
		},
	},
];

export default xoConfig;
