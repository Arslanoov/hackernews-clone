import produce from 'immer';

import { StoryInterface } from 'types/story';
import { CommentsTree } from 'types/comment';

import { ItemAction } from 'store/actions/item';
import { ItemActionType } from 'store/action-types/item';

interface ItemState {
  story: StoryInterface | null;
  comments: CommentsTree;
}

const initialState: ItemState = {
  story: null,
  comments: [],
};

const reducer = produce(
  (state: ItemState = initialState, action: ItemAction) => {
    switch (action.type) {
      case ItemActionType.CLEAR_ITEM_WITH_COMMENTS:
        state.story = null;
        state.comments = [];
        return state;

      case ItemActionType.SET_ITEM:
        state.story = action.payload.item;
        return state;

      case ItemActionType.SET_COMMENTS:
        state.comments = action.payload.comments;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
