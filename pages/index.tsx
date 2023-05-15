import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react';
import { GetStaticPropsContext } from 'next/types';
import { StoryProp } from '../types';

export default function Home({ story, preview }: StoryProp) {
	story = useStoryblokState(story, {}, preview); // enables live visual editing and preview mode

	return (
		<>
			<StoryblokComponent blok={story.content} storyName={story.name} />
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	//**
	// * Get page data
	// */
	// slug should match SB slug otherwise you have to use SB real path field
	const slug = 'home';

	// load the published version
	const sbParams = {
		version: 'published', // default shows published
		resolve_links: 'url',
	};

	if (context.preview) {
		sbParams.version = 'draft';
	}

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	//**
	// * Get header data
	// */

	// Get published stories for header and footer
	const { data: storyResponse } = await storyblokApi.get('cdn/stories/global-components', {
		version: 'published',
	});

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			global_components: storyResponse ? storyResponse.story : data.story,
			preview: context.preview || false,
		},
		revalidate: 3600, // revalidate every hour
	};
}
