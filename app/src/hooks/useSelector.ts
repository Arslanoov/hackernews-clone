import {
  useSelector as baseUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from 'store/reducers';

export const useSelector: TypedUseSelectorHook<RootState> = baseUseSelector;
