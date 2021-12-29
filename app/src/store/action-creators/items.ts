import { Dispatch } from 'redux';

import { ItemInterface, StoryListsTypes } from 'types/item';

import { fetchStories, fetchStory } from 'utils/api';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

const PER_PAGE = 5;
const PAGE = 1;

export const fetchTopList = () => async (dispatch: Dispatch<ItemsAction>) => {
  const { data: storiesList } = await fetchStories(StoryListsTypes.Top);
  dispatch({
    type: ItemsActionType.SET_LIST,
    payload: {
      list: StoryListsTypes.Top,
      listItems: storiesList,
    },
  });

  const paginatedStoriesList = storiesList.slice(
    PER_PAGE * (PAGE - 1),
    PER_PAGE
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
};
