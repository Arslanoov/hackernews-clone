import { StoriesResponse, StoryResponse } from 'types/response/item';
import { StoryListsTypes } from 'types/item';

import api from './instance';

export const fetchStories = (type: StoryListsTypes): StoriesResponse =>
  api.get(`/${type}stories.json`);

export const fetchStory = (id: number): StoryResponse =>
  api.get(`item/${id}.json`);
