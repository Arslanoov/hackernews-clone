import { Dispatch } from 'redux';

import { UserAction } from 'store/actions/user';
import { UserActionType } from 'store/action-types/user';

import { fetchUser as requestUser } from 'utils/api';

export const fetchUser =
  (username: string) => async (dispatch: Dispatch<UserAction>) => {
    const { data: user } = await requestUser(username);

    dispatch({
      type: UserActionType.SET_USER,
      payload: {
        user,
      },
    });
  };

export const clearUser = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({
    type: UserActionType.CLEAR_USER,
  });
};
