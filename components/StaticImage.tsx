import { storyblokEditable } from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';
import Image from 'next/image';

export const StaticImage = ({ blok }: StoryBlokComponentProps) => {
	return (
		<div {...storyblokEditable(blok)}>
			<Image
				src={blok.static_image.filename}
				alt={blok.static_image.alt}
				className="u-w-full"
				// TODO: confirm width and height
				width={2000}
				height={2000}
				priority
			/>
		</div>
	);
};
