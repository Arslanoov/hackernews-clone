import { combineReducers } from 'redux';

import storiesReducer from './stories';
import itemReducer from './item';
import userReducer from './user';

const reducers = combineReducers({
  stories: storiesReducer,
  item: itemReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
