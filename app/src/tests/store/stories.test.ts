import { StoriesStore } from 'store/stories';

import * as api from 'utils/api';

import { storyMock } from 'tests/dummy/story';

import { ItemResponse, StoriesResponse } from 'types/response/item';
import { StoryListsTypes } from 'types/story';

describe('Store stories module test', () => {
  test('fetch list', async () => {
    const store = new StoriesStore();
    expect(store.lists.new).toStrictEqual([]);

    const items = [storyMock, storyMock, storyMock];
    const storiesSpy = jest.spyOn(api, 'fetchStories').mockResolvedValue({
      data: items,
    } as unknown as StoriesResponse);

    await store.fetchStoriesList(StoryListsTypes.New);

    expect(storiesSpy).toBeCalled();
    expect(store.lists.new).toStrictEqual(items);
  });

  test('fetch list items', async () => {
    const store = new StoriesStore();
    expect(store.lists.new).toStrictEqual([]);

    const itemSpy = jest.spyOn(api, 'fetchItem').mockResolvedValue({
      data: storyMock,
    } as unknown as ItemResponse);

    store.setList(StoryListsTypes.New, [1, 2, 3]);

    await store.fetchListItems(StoryListsTypes.New, 1);

    expect(itemSpy).toBeCalled();
    expect(store.stories).toStrictEqual([storyMock, storyMock, storyMock]);
  });
});
