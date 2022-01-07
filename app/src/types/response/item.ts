import { AxiosResponse } from 'axios';

import { StoryInterface, Stories } from 'types/story';
import { ItemInterface } from 'types/item';
import { CommentInterface } from 'types/comment';

export type StoriesResponse = Promise<AxiosResponse<Stories>>;
export type ItemResponse = Promise<
  AxiosResponse<ItemInterface | CommentInterface | StoryInterface>
>;
