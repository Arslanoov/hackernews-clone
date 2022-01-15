import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/rootReducer';

import { fetchUser as requestUser } from 'utils/api';

import { UserInterface } from 'types/user';

interface UserState {
  current: UserInterface | null;
}

const initialState: UserState = {
  current: null,
};

export const SLICE_NAME = 'user';

export const fetchUser = createAsyncThunk(
  `${SLICE_NAME}/fetchUser`,
  async (username: string) => {
    const { data: user } = await requestUser(username);

    return {
      user,
    };
  }
);

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearItemWithComments: (state: UserState) => {
      state.current = null;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (
      state: UserState,
      action: PayloadAction<{
        user: UserInterface;
      }>
    ) => {
      state.current = action.payload.user;
    },
  },
});

export const { clearItemWithComments } = userSlice.actions;

export const currentUserSelector = ({ user }: RootState) =>
  user?.current as UserInterface | null;

export default userSlice.reducer;
