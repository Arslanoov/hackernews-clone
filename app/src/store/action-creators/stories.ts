import { Dispatch } from 'redux';

import { StoryInterface, StoryListsTypes } from 'types/story';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchStories, fetchItem } from 'utils/api';
import { removeUriFromUrl } from 'utils/helpers/removeUri';

import { RootState } from 'store/reducers';
import { StoriesAction } from 'store/actions/stories';
import { StoriesActionType } from 'store/action-types/stories';

export const fetchStoriesList =
  (type: StoryListsTypes) => async (dispatch: Dispatch<StoriesAction>) => {
    const { data: storiesList } = await fetchStories(type);
    dispatch({
      type: StoriesActionType.SET_LIST,
      payload: {
        list: type,
        listItems: storiesList,
      },
    });
  };

export const fetchListItems =
  (type: StoryListsTypes, page: number = 1) =>
  async (dispatch: Dispatch<StoriesAction>, getState: () => RootState) => {
    const { stories: list } = getState();

    const paginatedStoriesList = (list?.lists[type] as number[]).slice(
      STORIES_PER_PAGE * (page - 1),
      STORIES_PER_PAGE * page
    );

    const stories = await Promise.all(
      paginatedStoriesList.map(
        (id: number): Promise<StoryInterface> =>
          new Promise<StoryInterface>((resolve) => {
            fetchItem(id).then((response) =>
              resolve(response.data as StoryInterface)
            );
          })
      )
    );

    stories.forEach(
      (item: StoryInterface) =>
        item.url && (item.domainUrl = removeUriFromUrl(item.url))
    );

    dispatch({
      type: StoriesActionType.SET_STORIES_LIST,
      payload: {
        items: stories,
      },
    });
  };

export const clearStoriesList =
  () => async (dispatch: Dispatch<StoriesAction>) => {
    dispatch({
      type: StoriesActionType.CLEAR_LIST,
    });
  };
