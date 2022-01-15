import { StoriesActionType } from 'store/action-types/stories';

import { StoryListsTypes } from 'types/story';

export const fetchStoriesList = (type: StoryListsTypes) => ({
  type: StoriesActionType.FETCH_STORIES_LIST,
  payload: {
    type,
  },
});

export const fetchListItems = (type: StoryListsTypes, page: number) => ({
  type: StoriesActionType.FETCH_LIST_ITEMS,
  payload: {
    type,
    page,
  },
});

export const clearStoriesList = () => ({
  type: StoriesActionType.CLEAR_STORIES_LIST,
});
