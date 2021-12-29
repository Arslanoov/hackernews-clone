import { ItemsActionType } from 'store/action-types/items';

import { ItemInterface, StoryListsTypes } from 'types/item';

export interface SetItemsAction {
  type: ItemsActionType.SET_ITEMS_LIST;
  payload: {
    items: ItemInterface[];
  };
}

export interface SetListAction {
  type: ItemsActionType.SET_LIST;
  payload: {
    list: StoryListsTypes;
    listItems: number[];
  };
}

export type ItemsAction = SetItemsAction | SetListAction;
