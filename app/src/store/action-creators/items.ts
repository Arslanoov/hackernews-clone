import { Dispatch } from 'redux';

import { ItemsAction } from 'store/actions/items';
import { ItemsActionType } from '../action-types/items';

export const fetchList =
  (type: string) => async (dispatch: Dispatch<ItemsAction>) => {
    const some = await Promise.resolve([]);
    console.log(type);

    dispatch({
      type: ItemsActionType.FETCH_TOP_LIST,
      payload: {
        items: some,
      },
    });
  };
