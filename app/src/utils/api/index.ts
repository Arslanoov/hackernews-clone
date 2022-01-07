import { StoriesResponse, ItemResponse } from 'types/response/item';
import { StoryListsTypes } from 'types/story';

import api from './instance';

export const fetchStories = (type: StoryListsTypes): StoriesResponse =>
  api.get(`/${type}stories.json`);

export const fetchItem = (id: number): ItemResponse =>
  api.get(`item/${id}.json`);
