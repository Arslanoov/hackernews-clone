import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { RootState } from 'store/rootReducer';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchItem, fetchStories } from 'utils/api';
import { removeUriFromUrl } from 'utils/helpers/removeUri';

import { StoryInterface, StoryListsTypes } from 'types/story';

interface StoriesState {
  stories: StoryInterface[];
  lists: {
    top: number[];
    new: number[];
    show: number[];
    ask: number[];
    job: number[];
  };
}

const initialState: StoriesState = {
  stories: [],
  lists: {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: [],
  },
};

export const SLICE_NAME = 'stories';

export const fetchStoriesList = createAsyncThunk(
  `${SLICE_NAME}/fetchStoriesList`,
  async (type: StoryListsTypes) => {
    const { data: storiesList } = await fetchStories(type);

    return {
      list: type,
      listItems: storiesList,
    };
  }
);

export const fetchListItems = createAsyncThunk(
  `${SLICE_NAME}/fetchListItems`,
  async (
    {
      type,
      page = 1,
    }: {
      type: StoryListsTypes;
      page: number;
    },
    { getState }
  ) => {
    const { stories: storiesState } = getState() as RootState;
    const list = storiesState.lists[type] as number[];

    const paginatedStoriesList = list.slice(
      STORIES_PER_PAGE * (page - 1),
      STORIES_PER_PAGE * page
    );

    const stories = await Promise.all(
      paginatedStoriesList.map(
        (id: number): Promise<StoryInterface> =>
          new Promise<StoryInterface>((resolve) => {
            fetchItem(id).then((response) =>
              resolve(response.data as StoryInterface)
            );
          })
      )
    );

    stories.forEach(
      (item: StoryInterface) =>
        item.url && (item.domainUrl = removeUriFromUrl(item.url))
    );

    return {
      items: stories,
    };
  }
);

export const storiesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearStoriesList: (state: StoriesState) => {
      state.stories = [];
    },
  },
  extraReducers: {
    [fetchStoriesList.fulfilled.type]: (
      state: StoriesState,
      action: PayloadAction<{
        list: StoryListsTypes;
        listItems: number[];
      }>
    ) => {
      state.lists[action.payload.list] = action.payload.listItems;
    },
    [fetchListItems.fulfilled.type]: (
      state: StoriesState,
      action: PayloadAction<{
        items: StoryInterface[];
      }>
    ) => {
      state.stories = action.payload.items;
    },
  },
});

export const { clearStoriesList } = storiesSlice.actions;

export const storiesSelector = ({ stories }: RootState) =>
  stories?.stories as StoryInterface[];

export const storiesTotalCountSelector = (type: StoryListsTypes) =>
  createSelector(
    (state: RootState) => state?.stories?.lists,
    (lists) => lists?.[type]?.length as number
  );

export default storiesSlice.reducer;
