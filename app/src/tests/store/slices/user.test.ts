import { store } from 'store';

import * as api from 'utils/api';

import { fetchUser, clearItemWithComments } from 'store/slices/user';

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

    await store.dispatch(fetchUser(user.username));

    expect(userSpy).toBeCalledTimes(1);
    expect(userSpy).toBeCalledWith(user.username);

    expect(store.getState().user?.current).toStrictEqual(user);
  });
});

describe('User sync actions', () => {
  it('clears user', () => {
    expect(store.getState().user?.current).not.toBeNull();

    store.dispatch(clearItemWithComments());

    expect(store.getState().user?.current).toBeNull();
  });
});
