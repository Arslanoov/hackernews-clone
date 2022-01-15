import {
  useSelector as baseUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from 'store/rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = baseUseSelector;
