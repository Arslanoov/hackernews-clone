import { RootState } from 'store/reducers';
import { UserInterface } from 'types/user';

export const currentUserSelector = ({ user }: RootState) =>
  user?.current as UserInterface | null;
