import Link from 'next/link';
import { LinkProps, StoryBlokGlobalComponentProps } from '../types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';

export const Header = ({ blok }: StoryBlokGlobalComponentProps) => {
	const { logo, navbar, primary_navbar } = blok;

	return (
		<Popover className="u-relative u-bg-white">
			{({ open }) => {
				return (
					<header>
						<div className="u-relative u-z-30 u-flex u-px-5 u-py-2.5 lg:u-hidden ">
							{/* mobile menu button */}
							<Popover.Button className="u-inline-flex u-items-center u-justify-center u-rounded-md u-bg-white u-text-lg u-text-gfg-navText hover:u-text-gfg-lightGray focus-visible:u-outline-none">
								<span className="u-sr-only">
									{!open ? 'Open menu' : 'Close menu'}
								</span>
								{!open ? (
									<Bars3Icon className="u-h-8 u-w-8" aria-hidden="true" />
								) : (
									<XMarkIcon className="u-h-8 u-w-8" aria-hidden="true" />
								)}
							</Popover.Button>
							<div className="u-ml-5 u-w-full">
								<a
									href={logo?.source}
									className="u-float-none u-m-auto u-ml-[-22px] u-block u-w-full"
								>
									<Image
										className="u-my-0 u-mx-auto"
										src={logo?.filename}
										alt={logo?.alt}
										width={54}
										height={54}
									/>
								</a>
							</div>
						</div>
						<div>
							<nav className="u-hidden u-bg-gfg-tertiary u-px-5%  u-text-white lg:u-block 2xl:u-px-24">
								<ul className="u-flex u-flex-wrap u-divide-x u-divide-gray-400/20 2xl:u-flex-nowrap [&>*:last-child]:!u-border-r [&>*:last-child]:!u-border-gray-400/20">
									{navbar.map((link: LinkProps, i: number) => (
										<li
											key={link._uid}
											className={i === 4 ? 'lg:u-ml-auto' : ''}
										>
											<Link
												href={link.url}
												className={`${
													i < 3
														? 'u-bg-gfg-lightGray u-font-semibold hover:u-bg-gfg-secondary hover:u-text-white'
														: 'u-font-sansGotham hover:u-bg-gfg-lightGray'
												} ${
													link.name === 'neocon 2023'
														? 'u-bg-gfg-secondary u-font-semibold hover:u-bg-gfg-secondary hover:u-text-white'
														: ''
												} u-flex u-px-10 u-py-2 u-text-sm u-transition`}
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							{/* <!-- .header-top --> */}
							<div className="u-hidden u-items-center u-px-12 u-py-4  lg:u-flex">
								<div>
									<a href={logo?.source}>
										<Image
											src={logo?.filename}
											alt={logo?.alt}
											width={101}
											height={95}
										/>
									</a>
								</div>
								<nav className="u-mx-8">
									<ul className="u-flex u-flex-wrap u-items-center u-justify-start u-gap-x-16 u-text-xl">
										{primary_navbar.map((link: LinkProps) => (
											<li key={link._uid}>
												<Link href={link.url} className="u-font-semibold">
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</nav>
								{/* <!-- .primary-navigation --> */}
							</div>
							{/* <!-- .header-content --> */}
						</div>
						{/* Mobile Navigation */}
						<Transition
							as={Fragment}
							enter="u-duration-200 u-ease-out"
							enterFrom="u-opacity-0 u-scale-95"
							enterTo="u-opacity-100 u-scale-100"
							leave="u-duration-100 u-ease-in"
							leaveFrom="u-opacity-100 u-scale-100"
							leaveTo="u-opacity-0 u-scale-95"
						>
							<Popover.Panel
								focus
								className="u-min-h-10 u-absolute u-inset-x-0 u-z-30 u-w-full u-origin-top-right u-transform u-border-t-4 u-border-gfg-primary u-transition lg:u-hidden "
							>
								{({ close }) => (
									<nav className="u-block u-w-full u-overflow-scroll u-bg-gfg-tertiary u-pt-5">
										<ul className="u-items-center u-justify-start">
											{primary_navbar.map((link: LinkProps) => (
												<li key={link._uid} className="">
													<Link
														href={link.url}
														className="u-block u-py-2 u-px-5 u-text-sm u-font-semibold u-text-white focus-visible:u-outline-none"
													>
														{link.name}
													</Link>
												</li>
											))}
											{navbar.map((link: LinkProps, i: number) => (
												<li key={link._uid} className="">
													<Link
														href={link.url}
														className={`
														${i > 3 ? 'u-border-t u-border-gray-400/20' : ''}
														${
															link.name === 'neocon 2023'
																? 'u-bg-gfg-secondary hover:u-text-white'
																: ''
														} u-block u-py-2 u-px-5 u-text-sm u-font-semibold u-text-white focus-visible:u-outline-none`}
													>
														{link.name}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								)}
							</Popover.Panel>
						</Transition>
					</header>
				);
			}}
		</Popover>
	);
};
