import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

import { COMMENTS_LIMIT } from 'config/pagination';

import { fetchItem } from 'utils/api';

import { StoryInterface } from 'types/story';
import { CommentInterface, CommentsTree } from 'types/comment';

interface ItemState {
  story: StoryInterface | null;
  comments: CommentsTree;
}

const initialState: ItemState = {
  story: null,
  comments: [],
};

export const SLICE_NAME = 'item';

export const fetchItemWithComments = createAsyncThunk(
  `${SLICE_NAME}/fetchItemWithComments`,
  async (id: number) => {
    const { data: story } = await fetchItem(id);

    const commentsPaginated = story.kids
      ? story.kids.slice(0, COMMENTS_LIMIT)
      : [];

    // First depth level comments
    const comments = await Promise.all(
      commentsPaginated.map(
        (kid: number): Promise<CommentInterface> =>
          new Promise((resolve) => {
            fetchItem(kid).then((response) =>
              resolve(response.data as CommentInterface)
            );
          })
      )
    );

    return {
      item: story as StoryInterface,
      comments,
    };
  }
);

export const itemSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearItemWithComments: (state: ItemState) => {
      state.story = null;
      state.comments = [];
    },
  },
  extraReducers: {
    [fetchItemWithComments.fulfilled.type]: (
      state: ItemState,
      action: PayloadAction<{
        item: StoryInterface;
        comments: CommentInterface[];
      }>
    ) => {
      state.story = action.payload.item;
      state.comments = action.payload.comments;
    },
  },
});

export const { clearItemWithComments } = itemSlice.actions;

export const itemSelector = ({ item }: RootState) =>
  item?.story as StoryInterface | null;

export const commentsSelector = ({ item }: RootState) =>
  item?.comments as CommentInterface[];

export default itemSlice.reducer;
