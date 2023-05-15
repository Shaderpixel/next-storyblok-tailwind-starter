import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import {
	Carousel,
	Downloads,
	Layout,
	Page,
	StaticImage,
	Header,
	Footer,
} from '../components';

const components = {
	carousel: Carousel,
	downloads: Downloads,
	layout: Layout,
	page: Page,
	static_image_block: StaticImage,
	global_components: Header,
	footer: Footer,
};

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin], // describe what Storyblok features to use
	apiOptions: { region: 'us' }, // region is needed if space is created in US
	components,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout story={pageProps.global_components}>
			<Component {...pageProps} />
		</Layout>
	);
}
