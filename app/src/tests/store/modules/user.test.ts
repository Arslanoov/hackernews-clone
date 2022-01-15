import store from 'store';

import * as api from 'utils/api';

import { fetchUser } from 'store/action-creators/user';
import { UserActionType } from 'store/action-types/user';
import { UserAction } from 'store/actions/user';

import { UserResponse } from 'types/response/user';

describe('User async actions', () => {
  it('fetch user', async () => {
    expect(store.getState().user?.current).toBeNull();

    const user = {
      id: 1,
      username: 'username',
    };

    const userSpy = jest.spyOn(api, 'fetchUser').mockResolvedValue({
      data: user,
    } as unknown as UserResponse);

    await store.dispatch(fetchUser(user.username) as unknown as UserAction);

    expect(userSpy).toBeCalledTimes(1);
    expect(userSpy).toBeCalledWith(user.username);

    expect(store.getState().user?.current).toStrictEqual(user);
  });
});

describe('User sync actions', () => {
  it('clears user', () => {
    expect(store.getState().user?.current).not.toBeNull();

    store.dispatch({
      type: UserActionType.CLEAR_USER,
    });

    expect(store.getState().user?.current).toBeNull();
  });
});
