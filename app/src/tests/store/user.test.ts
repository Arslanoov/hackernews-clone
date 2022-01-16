import { UserStore } from 'store/user';

import * as api from 'utils/api';

import { userMock } from 'tests/dummy/user';

import { UserResponse } from 'types/response/user';

describe('Store user module test', () => {
  test('set and clear user', () => {
    const store = new UserStore();
    expect(store.current).toBeNull();

    store.setUser(userMock);

    expect(store.current).toStrictEqual(userMock);
  });

  test('fetch user', async () => {
    const store = new UserStore();
    expect(store.current).toBeNull();

    const userSpy = jest.spyOn(api, 'fetchUser').mockResolvedValue({
      data: userMock,
    } as unknown as UserResponse);

    await store.fetchUser('username');

    expect(userSpy).toBeCalledTimes(1);

    expect(store.current).toStrictEqual(userMock);
  });
});
