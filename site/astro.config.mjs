// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		build: {
			minify: 'esbuild',
			cssMinify: true,
		},
	},
	compressHTML: true,
});
