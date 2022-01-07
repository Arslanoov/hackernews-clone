import produce from 'immer';

import { UserAction } from 'store/actions/user';
import { UserActionType } from 'store/action-types/user';

import { UserInterface } from 'types/user';

interface UserState {
  current: UserInterface | null;
}

const initialState: UserState = {
  current: null,
};

const reducer = produce(
  (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
      case UserActionType.SET_USER:
        state.current = action.payload.user;
        return state;

      case UserActionType.CLEAR_USER:
        state.current = null;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
