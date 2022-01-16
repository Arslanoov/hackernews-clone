import { makeAutoObservable } from 'mobx';

import { UserInterface } from 'types/user';
import { fetchUser as requestUser } from 'utils/api';

export interface UserStoreInterface {
  current: UserInterface | null;
}

export class UserStore implements UserStoreInterface {
  public current: UserInterface | null = null;

  public constructor() {
    makeAutoObservable(this);
  }

  public setUser(user: UserInterface): void {
    this.current = user;
  }

  public clearUser(): void {
    this.current = null;
  }

  public async fetchUser(username: string): Promise<void> {
    const { data: user } = await requestUser(username);
    this.setUser(user);
  }
}
