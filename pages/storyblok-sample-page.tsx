import Head from 'next/head';
import styles from '../styles/Home.module.css';

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
} from '@storyblok/react';
import { StoryProp } from '../types';
import { GetStaticPropsContext } from 'next';

export default function Home({ story, preview }: StoryProp) {
	story = useStoryblokState(story, {}, preview); // enables live visual editing and preview mode

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<h1>{story ? story.name : 'My Site'}</h1>
			</header>

			<StoryblokComponent blok={story.content} />
		</div>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	// home is the default slug for the homepage in Storyblok
	let slug = 'storyblok';

	// load the draft version
	let sbParams = {
		version: 'published', // default shows published
	};

	if (context.preview) {
		sbParams.version = 'draft';
	}

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			preview: context.preview || false,
		},
		revalidate: 3600, // revalidate every hour
	};
}
