import { makeAutoObservable } from 'mobx';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchItem, fetchStories } from 'utils/api';
import { removeUriFromUrl } from 'utils/helpers/removeUri';

import { StoryInterface, StoryListsTypes } from 'types/story';

export interface StoriesStoreInterface {
  stories: StoryInterface[];
  lists: {
    top: number[];
    new: number[];
    show: number[];
    ask: number[];
    job: number[];
  };
}

export class StoriesStore implements StoriesStoreInterface {
  public stories: StoryInterface[] = [];

  public lists = {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: [],
  };

  public constructor() {
    makeAutoObservable(this);
  }

  public setList(listType: StoryListsTypes, items: number[]): void {
    (this.lists[listType] as number[]) = items;
  }

  public setStoriesList(stories: StoryInterface[]): void {
    this.stories = stories;
  }

  public clearList(): void {
    this.stories = [];
  }

  public async fetchStoriesList(type: StoryListsTypes): Promise<void> {
    const { data: storiesList } = await fetchStories(type);
    this.setList(type, storiesList);
  }

  public async fetchListItems(
    type: StoryListsTypes,
    page: number = 1
  ): Promise<void> {
    const paginatedStoriesList = this.lists[type].slice(
      STORIES_PER_PAGE * (page - 1),
      STORIES_PER_PAGE * page
    );

    const stories = await Promise.all(
      paginatedStoriesList.map(
        (id: number): Promise<StoryInterface> =>
          new Promise<StoryInterface>((resolve) => {
            fetchItem(id).then((response) =>
              resolve(response.data as StoryInterface)
            );
          })
      )
    );

    stories.forEach(
      (item: StoryInterface) =>
        item.url && (item.domainUrl = removeUriFromUrl(item.url))
    );

    this.setStoriesList(stories);
  }
}
