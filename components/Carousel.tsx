import { storyblokEditable } from '@storyblok/react';
import { CarouselProps, StoryBlokComponentProps } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const Carousel = ({ blok }: StoryBlokComponentProps) => {
	const { carousel_items } = blok;
	return (
		<Swiper
			modules={[Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			scrollbar={{ draggable: true }}
			{...storyblokEditable(blok)}
			style={
				{
					'--swiper-scrollbar-width': `${15 * carousel_items.length}%`,
				} as React.CSSProperties
			}
		>
			{carousel_items.map((carousel: CarouselProps) => (
				<SwiperSlide key={carousel._uid}>
					<Link href={carousel.url} passHref>
						<Image
							alt={carousel.image.alt}
							className="u-aspect-auto u-w-full"
							src={carousel.image.filename}
							width={1920}
							height={845}
							loading="lazy"
						/>
						<span className="u-sr-only">{carousel.image.title}</span>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
