/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
			},
			colors: {
				page: 'var(--bg-page)',
				card: 'var(--bg-card)',
				body: 'var(--text-main)',
				head: 'var(--text-head)',
				stroke: 'var(--stroke)',
			},
		},
	},
	plugins: [],
};
