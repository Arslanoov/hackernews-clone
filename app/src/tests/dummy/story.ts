import { ItemTypes } from 'types/item';
import { StoryInterface } from 'types/story';

export const storyMock: StoryInterface = {
  id: 1,
  by: 'Author',
  score: 10,
  title: 'Title',
  time: 14618471,
  descendants: 0,
  type: ItemTypes.Story,
};
