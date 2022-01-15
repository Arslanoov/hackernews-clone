import { UserActionType } from 'store/action-types/user';

export const fetchUser = (username: string) => ({
  type: UserActionType.FETCH_USER,
  payload: {
    username,
  },
});

export const clearUser = () => ({
  type: UserActionType.CLEAR_ITEM,
});
