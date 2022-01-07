import { Dispatch } from 'redux';

import { ItemAction } from 'store/actions/item';
import { ItemActionType } from 'store/action-types/item';

import { fetchItem } from 'utils/api';

import { COMMENTS_LIMIT } from 'config/pagination';

import { StoryInterface } from 'types/story';
import { CommentInterface } from 'types/comment';

export const fetchItemWithComments =
  (id: number) => async (dispatch: Dispatch<ItemAction>) => {
    const { data: story } = await fetchItem(id);
    dispatch({
      type: ItemActionType.SET_ITEM,
      payload: {
        item: story as StoryInterface,
      },
    });

    const commentsPaginated = story.kids
      ? story.kids.slice(0, COMMENTS_LIMIT)
      : [];

    // First depth level comments
    const comments = await Promise.all(
      commentsPaginated.map(
        (kid: number): Promise<CommentInterface> =>
          new Promise((resolve) => {
            fetchItem(kid).then((response) =>
              resolve(response.data as CommentInterface)
            );
          })
      )
    );

    dispatch({
      type: ItemActionType.SET_COMMENTS,
      payload: {
        comments,
      },
    });
  };
