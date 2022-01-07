import { ItemActionType } from 'store/action-types/item';

import { StoryInterface } from 'types/story';
import { CommentInterface } from 'types/comment';

export interface SetItemAction {
  type: ItemActionType.SET_ITEM;
  payload: {
    item: StoryInterface;
  };
}

export interface SetCommentsAction {
  type: ItemActionType.SET_COMMENTS;
  payload: {
    comments: CommentInterface[];
  };
}

export interface ClearItemWithCommentsAction {
  type: ItemActionType.CLEAR_ITEM_WITH_COMMENTS;
}

export type ItemAction =
  | SetItemAction
  | SetCommentsAction
  | ClearItemWithCommentsAction;
