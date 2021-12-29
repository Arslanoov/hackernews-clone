import { AxiosResponse } from 'axios';

import { ItemInterface, Stories } from 'types/item';

export type StoriesResponse = Promise<AxiosResponse<Stories>>;
export type StoryResponse = Promise<AxiosResponse<ItemInterface>>;
