import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [svg({})],
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$lib: resolve('./src/lib'),
					$assets: resolve('./src/assets'),
					$screens: resolve('./src/screens'),
					$stores: resolve('./src/stores'),
					$helpers: resolve('./src/helpers')
				}
			}
		}
	}
};

export default config;
