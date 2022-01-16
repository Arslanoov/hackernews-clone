import { makeAutoObservable } from 'mobx';

import { COMMENTS_LIMIT } from 'config/pagination';

import { fetchItem } from 'utils/api';

import { StoryInterface } from 'types/story';
import { CommentInterface, CommentsTree } from 'types/comment';

export interface ItemStoreInterface {
  story: StoryInterface | null;
  comments: CommentsTree;
}

export class ItemStore implements ItemStoreInterface {
  public story: StoryInterface | null = null;

  public comments: CommentsTree = [];

  public constructor() {
    makeAutoObservable(this);
  }

  public setItem(story: StoryInterface): void {
    this.story = story;
  }

  public setComments(comments: CommentsTree): void {
    this.comments = comments;
  }

  public clearItemWithComments(): void {
    this.story = null;
    this.comments = [];
  }

  public async fetchItemWithComments(id: number): Promise<void> {
    const { data: story } = await fetchItem(id);
    this.setItem(story as StoryInterface);

    const commentsPaginated = story.kids
      ? story.kids.slice(0, COMMENTS_LIMIT)
      : [];

    // First depth level comments
    const comments = await Promise.all(
      commentsPaginated.map(
        (kid: number): Promise<CommentInterface> =>
          new Promise((resolve) => {
            fetchItem(kid).then((response) =>
              resolve(response.data as CommentInterface)
            );
          })
      )
    );

    this.setComments(comments);
  }
}
