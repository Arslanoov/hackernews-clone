import { ItemsActionType } from 'store/action-types/items';

import { ItemInterface } from 'types/item';

export interface FetchItemsAction {
  type: ItemsActionType.FETCH_TOP_LIST;
  payload: {
    items: ItemInterface[];
  };
}

export type ItemsAction = FetchItemsAction;
