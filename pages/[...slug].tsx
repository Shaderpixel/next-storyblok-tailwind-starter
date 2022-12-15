import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { StoryProp } from '../types';

export default function Page({ story, preview }: StoryProp) {
	story = useStoryblokState(story, {}, preview); // enables live visual editing and preview mode

	return (
		<div className={styles.container}>
			<Head>
				<title>{story ? story.name : 'My Site'}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<h1>{story ? story.name : 'My Site'}</h1>
			</header>
			<p>Dynamic Route page</p>
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

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get('cdn/links/');
	console.log('data', data);

	let paths: Array<string | { params: ParsedUrlQuery; locale?: string }> = [];
	Object.keys(data.links).forEach((linkKey) => {
		if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
			return;
		}

		const slug: string = data.links[linkKey].slug;
		let splittedSlug = slug.split('/');

		paths.push({ params: { slug: splittedSlug } });
	});

	console.log('paths', paths);

	return {
		paths: paths,
		fallback: false,
	};
}
