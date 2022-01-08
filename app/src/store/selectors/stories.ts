import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';
import { StoryInterface, StoryListsTypes } from 'types/story';

export const storiesSelector = ({ stories }: RootState) =>
  stories?.stories as StoryInterface[];

export const storiesTotalCountSelector = (type: StoryListsTypes) =>
  createSelector(
    (state: RootState) => state?.stories?.lists,
    (lists) => lists?.[type]?.length as number
  );
