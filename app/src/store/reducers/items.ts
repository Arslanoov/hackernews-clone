import produce from 'immer';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

import { ItemInterface } from 'types/item';

interface ItemsState {
  lists: {
    top: ItemInterface[];
  };
}

const initialState: ItemsState = {
  lists: {
    top: [],
  },
};

const reducer = produce(
  (state: ItemsState = initialState, action: ItemsAction) => {
    switch (action.type) {
      case ItemsActionType.FETCH_TOP_LIST:
        state.lists.top = action.payload.items;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
