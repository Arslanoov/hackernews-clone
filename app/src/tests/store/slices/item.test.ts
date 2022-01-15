import { store } from 'store';

import * as api from 'utils/api';

import {
  clearItemWithComments,
  fetchItemWithComments,
} from 'store/slices/item';

import { ItemResponse } from 'types/response/item';

describe('Item async actions', () => {
  it('fetch item with comments', async () => {
    const itemSpy = jest.spyOn(api, 'fetchItem').mockResolvedValue({
      data: {
        id: 1,
        kids: [1, 1, 1],
      },
    } as unknown as ItemResponse);

    await store.dispatch(fetchItemWithComments(1));

    expect(itemSpy).toBeCalledTimes(4);
  });
});

describe('Item sync actions', () => {
  it('clears item and comments', () => {
    expect(store.getState().item?.story).not.toBeNull();
    expect(store.getState().item?.comments).not.toStrictEqual([]);

    store.dispatch(clearItemWithComments());

    expect(store.getState().item?.story).toBeNull();
    expect(store.getState().item?.comments).toStrictEqual([]);
  });
});
