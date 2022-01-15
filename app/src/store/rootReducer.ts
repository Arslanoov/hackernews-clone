import { combineReducers } from '@reduxjs/toolkit';

import itemSliceReducer from './slices/item';
import storiesSliceReducer from './slices/stories';
import userSliceReducer from './slices/user';

const rootReducer = combineReducers({
  item: itemSliceReducer,
  stories: storiesSliceReducer,
  user: userSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
