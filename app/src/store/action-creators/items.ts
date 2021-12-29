import { Dispatch } from 'redux';

import { ItemInterface, StoryListsTypes } from 'types/item';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchStories, fetchStory } from 'utils/api';

import { RootState } from 'store/reducers';
import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

export const fetchList =
  (type: StoryListsTypes) => async (dispatch: Dispatch<ItemsAction>) => {
    const { data: storiesList } = await fetchStories(type);
    dispatch({
      type: ItemsActionType.SET_LIST,
      payload: {
        list: StoryListsTypes.Top,
        listItems: storiesList,
      },
    });
  };

export const fetchListItems =
  (type: StoryListsTypes, page: number = 1) =>
  async (dispatch: Dispatch<ItemsAction>, getState: () => RootState) => {
    const { items } = getState();

    const paginatedStoriesList = (items?.lists[type] as number[]).slice(
      STORIES_PER_PAGE * (page - 1),
      STORIES_PER_PAGE * page
    );
    const stories = await Promise.all(
      paginatedStoriesList.map(
        (id: number): Promise<ItemInterface> =>
          new Promise((resolve) => {
            fetchStory(id).then((response) => resolve(response.data));
          })
      )
    );

    dispatch({
      type: ItemsActionType.SET_ITEMS_LIST,
      payload: {
        items: stories,
      },
    });

    dispatch({
      type: ItemsActionType.SET_CURRENT_PAGE,
      payload: {
        page,
      },
    });
  };
