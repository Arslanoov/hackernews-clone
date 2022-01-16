import { ItemStore } from 'store/item';

import * as api from 'utils/api';

import { storyMock } from 'tests/dummy/story';
import { commentMock } from 'tests/dummy/comment';

import { ItemResponse } from 'types/response/item';

describe('Store item module test', () => {
  test('story and comments set', () => {
    const store = new ItemStore();
    expect(store.story).toBeNull();
    expect(store.comments).toStrictEqual([]);

    store.setItem(storyMock);
    store.setComments([commentMock, commentMock]);

    expect(store.story).toStrictEqual(storyMock);
    expect(store.comments).toStrictEqual([commentMock, commentMock]);
  });

  test('story and comments fetch', async () => {
    const store = new ItemStore();
    expect(store.story).toBeNull();
    expect(store.comments).toStrictEqual([]);

    const item = {
      id: 1,
      kids: [2, 3, 4],
    };
    const itemSpy = jest.spyOn(api, 'fetchItem').mockResolvedValue({
      data: item,
    } as unknown as ItemResponse);

    await store.fetchItemWithComments(1);

    expect(itemSpy).toBeCalledTimes(4);
    expect(store.story).toStrictEqual(item);
    expect(store.comments).toStrictEqual([item, item, item]);
  });
});
