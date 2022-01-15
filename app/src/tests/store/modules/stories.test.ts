import store from 'store';

import * as api from 'utils/api';

import { storyMock } from 'tests/dummy/story';

import { fetchStoriesList } from 'store/action-creators/stories';
import { StoriesAction } from 'store/actions/stories';

import { StoriesResponse } from 'types/response/item';
import { StoryListsTypes } from 'types/story';

describe('Stories sync functions', () => {
  it('fetch list', async () => {
    expect(store.getState().stories?.lists.top).toStrictEqual([]);

    const storiesSpy = jest.spyOn(api, 'fetchStories').mockResolvedValue({
      data: [storyMock, storyMock, storyMock],
    } as unknown as StoriesResponse);

    await store.dispatch(
      fetchStoriesList(StoryListsTypes.Top) as unknown as StoriesAction
    );

    expect(storiesSpy).toBeCalledWith(StoryListsTypes.Top);

    expect(store.getState().stories?.lists.top).toStrictEqual([
      storyMock,
      storyMock,
      storyMock,
    ]);
  });
});
