import type { SbBlokData, StoryData } from '@storyblok/react/dist/types';

interface StoryProp {
	story: StoryData;
	preview: boolean;
}

interface MyStoryBlokDataInterface extends SbBlokData {
	body: SbBlokData[];
	story: SbBlokData;
	columns: SbBlokData[];
	[index: string]: SbBlokKeyDataTypes;
}

// Pattern copied from @storyblok/react/dist/types/components/storyblok-component.d.ts
interface StoryBlokComponentProps {
	blok: MyStoryBlokDataInterface;
	[key: string]: unknown;
}

interface MyStoryBlokGlobalDataInterface extends SbBlokData {
    [index: string]: SbBlokKeyDataTypes;
}
interface StoryBlokGlobalComponentProps {
    blok: MyStoryBlokGlobalDataInterface;
    [key: string]: unknown;
}

export interface StoryBlokLayoutProps {
	children: ReactElement<any, any>;
	story: StoryData;
}

export interface FileProps {
	alt: string;
	copyright: string;
	fieldtype: string;
	filename: string;
	focus: string;
	id: number;
	is_external_url: boolean;
	name: string;
	title: string;
	_uid: string;
}

export interface LinkProps {
	component: string;
	name?: string;
	url: string;
	_uid: string;
}

export interface SocialLinkProps extends LinkProps {
	image: FileProps;
	title: string;
}

export interface CarouselProps extends LinkProps {
	image: FileProps;
	title: string;
}

export interface DownloadProps extends LinkProps {
	description: string;
	file_size: string;
	image: FileProps;
	pdf: FileProps;
}
