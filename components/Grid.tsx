import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';

export const Grid = ({ blok }: StoryBlokComponentProps) => {
	console.log('blok.columns', blok.columns);
	return (
		<div className='grid' {...storyblokEditable(blok)}>
			{blok.columns?.map((nestedBlok: SbBlokData) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};
