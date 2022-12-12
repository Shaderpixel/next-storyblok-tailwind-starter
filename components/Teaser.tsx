import { storyblokEditable } from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';

export const Teaser = ({ blok }: StoryBlokComponentProps) => {
	return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
