import Link from 'next/link';
import { MAIN_CONTENT_ID } from '../utils/constants';

export const SkipNavigationLink = () => {
	return (
		<Link
			className="u--translate-x-24 u--translate-y-24 u-bg-gfg-primary focus:u--translate-x-0 focus:u--translate-y-0 focus:u-p-4 u-sr-only u-z-50 u-inline-flex u-text-white u-transition focus:u-not-sr-only focus:u-absolute focus:u-top-[4px] focus:u-left-[4px] focus:u-ring-4 focus:u-ring-gfg-primary"
			href={`#${MAIN_CONTENT_ID}`}
		>
			Skip to content
		</Link>
	);
};
