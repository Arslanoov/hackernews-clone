import { UserActionType } from 'store/action-types/user';

import { UserInterface } from 'types/user';

export interface SetUserAction {
  type: UserActionType.SET_USER;
  payload: {
    user: UserInterface;
  };
}

export interface ClearUserAction {
  type: UserActionType.CLEAR_USER;
}

export type UserAction = SetUserAction | ClearUserAction;
