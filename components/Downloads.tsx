import { storyblokEditable } from '@storyblok/react';
import { DownloadProps, StoryBlokComponentProps } from '../types';
import Image from 'next/image';
import Link from 'next/link';

export const Downloads = ({ blok }: StoryBlokComponentProps) => {
	const { description, download_items } = blok;

	return (
		<div className="column feature" {...storyblokEditable(blok)}>
			<section className="u-mb-20 u-px-12">
				<h2 className="u-sr-only">Downloads</h2>
				<p className="u-mb-7 u-max-w-prose u-text-2xl">{description}</p>
				<div className="md:u-gap-1/2 2xl:u-gap-1/3 u-flex u-flex-wrap">
					{download_items?.map((download: DownloadProps) => (
						<div
							className="md:u-col-1/3 2xl:u-col-1/4 u-flex u-flex-col u-items-center u-justify-center"
							key={download._uid}
						>
							<Link
								href={download.pdf.filename}
								download
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={download.image.filename}
									loading="lazy"
									alt={download.image.alt}
									className="u-mb-7 u-mt-auto"
									width={535}
									height={352}
								/>
							</Link>
							<div className="u-mb-7 u-mt-auto u-text-center">
								<p>
									{download.description}
									<Link
										href={download.pdf.filename}
										download
										target="_blank"
										rel="noreferrer"
									>
										<span className="u-pr-2"> (PDF) </span>
										<span className="u-text-sm">{download.file_size}</span>
									</Link>
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};
