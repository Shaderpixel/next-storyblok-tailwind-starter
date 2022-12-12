import type { SbBlokData, StoryData } from '@storyblok/react/dist/types';

interface StoryProp {
	story: StoryData;
}

interface MyStoryBlokDataInterface extends SbBlokData {
	body: SbBlokData[];
	story: SbBlokData;
	columns: SbBlokData[];
}

// Pattern copied from @storyblok/react/dist/types/components/storyblok-component.d.ts
interface StoryBlokComponentProps {
	blok: MyStoryBlokDataInterface;
	[key: string]: unknown;
}
