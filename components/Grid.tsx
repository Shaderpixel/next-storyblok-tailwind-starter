import { storyblokEditable, StoryblokComponent, SbBlokData } from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';

export const Grid = ({ blok }: StoryBlokComponentProps) => {
	return (
		<div className="grid" {...storyblokEditable(blok)}>
			{blok.columns?.map((nestedBlok: SbBlokData) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};
