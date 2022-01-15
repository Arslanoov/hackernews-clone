import { store } from 'store';

import * as api from 'utils/api';

import { storyMock } from 'tests/dummy/story';

import {
  fetchStoriesList,
  fetchListItems,
} from 'store/action-creators/stories';
import { StoriesAction } from 'store/actions/stories';

import { ItemResponse, StoriesResponse } from 'types/response/item';
import { StoryListsTypes } from 'types/story';

describe('Stories async functions', () => {
  it('fetch list', async () => {
    expect(store.getState().stories?.lists.top).toStrictEqual([]);

    const storiesSpy = jest.spyOn(api, 'fetchStories').mockResolvedValue({
      data: [1, 2, 3],
    } as unknown as StoriesResponse);
    const itemSpy = jest.spyOn(api, 'fetchItem').mockResolvedValue({
      data: storyMock,
    } as unknown as ItemResponse);

    await store.dispatch(
      fetchStoriesList(StoryListsTypes.Top) as unknown as StoriesAction
    );

    expect(storiesSpy).toBeCalledWith(StoryListsTypes.Top);
    expect(store.getState().stories?.lists.top).toStrictEqual([1, 2, 3]);

    expect(itemSpy).toBeCalledTimes(3);
    expect(itemSpy).toHaveBeenLastCalledWith(3);
  });
});
