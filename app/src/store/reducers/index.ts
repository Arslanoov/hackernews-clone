import { combineReducers } from 'redux';

import itemsReducer from './items';

const reducers = combineReducers({
  items: itemsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
