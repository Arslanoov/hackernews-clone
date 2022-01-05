import produce from 'immer';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from 'store/action-types/items';

import { extractDomainFromUrl } from 'utils/helpers/extractDomain';

import { ItemInterface } from 'types/item';

interface ItemsState {
  items: ItemInterface[];
  lists: {
    top: number[];
    new: number[];
  };
}

const initialState: ItemsState = {
  items: [],
  lists: {
    top: [],
    new: [],
  },
};

const reducer = produce(
  (state: ItemsState = initialState, action: ItemsAction) => {
    switch (action.type) {
      case ItemsActionType.SET_LIST:
        state.lists[action.payload.list] = action.payload.listItems;
        return state;

      case ItemsActionType.SET_ITEMS_LIST:
        action.payload.items.forEach(
          (item) => (item.url = extractDomainFromUrl(item.url))
        );
        state.items = action.payload.items;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
