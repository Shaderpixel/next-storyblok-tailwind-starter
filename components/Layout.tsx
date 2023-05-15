import { Open_Sans } from '@next/font/google';
import localFont from '@next/font/local';
import { StoryBlokLayoutProps } from 'types';
import { MAIN_CONTENT_ID } from 'utils/constants';
import { Footer } from './Footer';
import { SkipNavigationLink } from './SkipNavigation';
import { Header } from './Header';

const openSans = Open_Sans({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600'],
	display: 'swap',
	variable: '--font-open-sans',
});

const gotham = localFont({
	src: [
		{
			path: '../public/fonts/gotham/Gotham-Book.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-gotham',
});

export const Layout = ({ children, story }: StoryBlokLayoutProps) => {
	const content = story?.content || children.props.story?.content;

	return (
		<>
			<div className={`${openSans.variable} ${gotham.variable} u-font-sans`}>
				<SkipNavigationLink />
				{content && <Header blok={content} />}
				{story && (
					<main id={MAIN_CONTENT_ID} className="u-overflow-x-hidden">
						{children}
					</main>
				)}
				{content && <Footer blok={content} />}
			</div>
		</>
	);
};
