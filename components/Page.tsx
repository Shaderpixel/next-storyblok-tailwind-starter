import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react';
import React from 'react';
import { StoryBlokComponentProps } from '../types';

export const Page = ({ blok }: StoryBlokComponentProps) => {
	return (
		<article {...storyblokEditable(blok)}>
			{blok.body?.map((nestedBlok: SbBlokData) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</article>
	);
};
