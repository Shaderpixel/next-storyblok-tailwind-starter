import { storyblokEditable } from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';

export const Feature = ({ blok }: StoryBlokComponentProps) => (
	<div className='column feature' {...storyblokEditable(blok)}>
		{blok.name}
	</div>
);
