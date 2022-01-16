import { UserStore } from './user';
import { ItemStore } from './item';
import { StoriesStore } from './stories';

export class RootStore {
  public userStore: UserStore;

  public itemStore: ItemStore;

  public storiesStore: StoriesStore;

  constructor(
    userStore: UserStore,
    itemStore: ItemStore,
    storiesStore: StoriesStore
  ) {
    this.userStore = userStore;
    this.itemStore = itemStore;
    this.storiesStore = storiesStore;
  }
}

export const store = new RootStore(
  new UserStore(),
  new ItemStore(),
  new StoriesStore()
);
