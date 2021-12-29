import { Dispatch } from 'redux';

import { ItemInterface, StoryListsTypes } from 'types/item';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchStories, fetchStory } from 'utils/api';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

export const fetchTopList =
  (page: number = 1) =>
  async (dispatch: Dispatch<ItemsAction>) => {
    const { data: storiesList } = await fetchStories(StoryListsTypes.Top);
    dispatch({
      type: ItemsActionType.SET_LIST,
      payload: {
        list: StoryListsTypes.Top,
        listItems: storiesList,
      },
    });

    const paginatedStoriesList = storiesList.slice(
      STORIES_PER_PAGE * (page - 1),
      STORIES_PER_PAGE
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
