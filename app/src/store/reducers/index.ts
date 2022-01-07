import { combineReducers } from 'redux';

import storiesReducer from './stories';
import itemReducer from './item';

const reducers = combineReducers({
  stories: storiesReducer,
  item: itemReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
