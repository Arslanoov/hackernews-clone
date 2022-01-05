import produce from 'immer';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

import { ItemInterface } from 'types/item';

interface ItemsState {
  items: ItemInterface[];
  lists: {
    top: number[];
    new: number[];
    show: number[];
    ask: number[];
    job: number[];
  };
}

const initialState: ItemsState = {
  items: [],
  lists: {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: [],
  },
};

const reducer = produce(
  (state: ItemsState = initialState, action: ItemsAction) => {
    switch (action.type) {
      case ItemsActionType.SET_LIST:
        state.lists[action.payload.list] = action.payload.listItems;
        return state;

      case ItemsActionType.SET_ITEMS_LIST:
        state.items = action.payload.items;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
