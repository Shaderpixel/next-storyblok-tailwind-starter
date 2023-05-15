import Link from 'next/link';
import { LinkProps, SocialLinkProps, StoryBlokGlobalComponentProps } from '../types';
import Image from 'next/image';

export const Footer = ({ blok }: StoryBlokGlobalComponentProps) => {
	const [footerDetails] = blok.footer;

	return (
		<footer>
			<div className="u-flex u-flex-wrap u-items-center u-gap-y-8 u-bg-gfg-tertiary u-px-12 u-pt-10 u-pb-10 u-text-white">
				<h2 className="u-m-0 u-mr-8">
					<Link
						href="https://www.globalfurnituregroup.com/ca/workplace/company/industry-events/"
						className="u-uppercase u-transition hover:u-text-gfg-primary"
					>
						{footerDetails?.title}
					</Link>
				</h2>
				<div className="social-links u-flex u-gap-3 md:u-ml-auto">
					{footerDetails.social_links.map((link: SocialLinkProps) => (
						<Link
							href={link.url}
							target="_blank"
							rel="nofollow"
							className="u-flex u-h-8 u-w-8 u-items-center u-justify-center u-bg-white"
							key={link._uid}
						>
							<Image
								src={link.image.filename}
								alt={link.image.alt}
								height={33}
								width={33}
								loading="lazy"
							/>
							<span className="u-sr-only">{link.title}</span>
						</Link>
					))}
				</div>
				{/* <!-- .social-links --> */}
			</div>
			{/* <!-- .social --> */}
			<div className="footer-links u-flex u-flex-wrap u-gap-8 u-px-12 u-pb-16 u-pt-7 u-pr-20 xl:u-pr-0">
				<div>
					<h2 className="u-mb-3 u-text-lg u-font-normal u-uppercase">Resources</h2>
					<ul className="u-space-y-0.5 u-text-sm">
						{footerDetails.resources.map((link: LinkProps) => (
							<li key={link._uid}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="u-mb-3 u-text-lg u-font-normal u-uppercase">Customer Service</h2>
					<ul className="u-space-y-0.5 u-text-sm">
						{footerDetails.customer_service.map((link: LinkProps) => (
							<li key={link._uid}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="u-mb-3 u-text-lg u-font-normal u-uppercase">Company</h2>
					<ul className="u-space-y-0.5 u-text-sm">
						{footerDetails.company.map((link: LinkProps) => (
							<li key={link._uid}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="u-mb-3 u-text-lg u-font-normal u-uppercase">Upcoming Events</h2>
					<ul className="u-space-y-0.5 u-text-sm">
						{footerDetails.upcoming_events.map((link: LinkProps) => (
							<li key={link._uid}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* <!-- .footer-links --> */}
			<div className="u-flex u-bg-gfg-tertiary u-px-12 u-py-2 u-text-xs u-text-white">
				<span className="copyright">© 2023 Global Furniture Group</span>
				&nbsp;|&nbsp;
				<Link href="https://www.globalfurnituregroup.com/workplace/legal">
					Privacy Policy
				</Link>
				&nbsp;|&nbsp;
				<Link href="https://www.globalfurnituregroup.com/workplace/sitemap">Sitemap</Link>
			</div>
		</footer>
	);
};
