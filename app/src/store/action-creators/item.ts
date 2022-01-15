import { ItemActionType } from 'store/action-types/item';

export const fetchItemWithComments = (id: number) => ({
  type: ItemActionType.FETCH_ITEM_WITH_COMMENTS,
  payload: {
    id,
  },
});

export const clearItemWithComments = () => ({
  type: ItemActionType.CLEAR_ITEM_WITH_COMMENTS,
});
