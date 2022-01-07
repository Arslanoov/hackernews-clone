import { StoriesActionType } from 'store/action-types/stories';

import { StoryInterface, StoryListsTypes } from 'types/story';

export interface SetStoriesAction {
  type: StoriesActionType.SET_STORIES_LIST;
  payload: {
    items: StoryInterface[];
  };
}

export interface SetListAction {
  type: StoriesActionType.SET_LIST;
  payload: {
    list: StoryListsTypes;
    listItems: number[];
  };
}

export interface SetPageAction {
  type: StoriesActionType.SET_CURRENT_PAGE;
  payload: {
    page: number;
  };
}

export interface ClearListAction {
  type: StoriesActionType.CLEAR_LIST;
}

export type StoriesAction =
  | SetStoriesAction
  | SetListAction
  | SetPageAction
  | ClearListAction;
