import { ItemInterface, ItemTypes } from 'types/item';

export interface StoryInterface extends ItemInterface {
  type: ItemTypes.Story | ItemTypes.Job;
  domainUrl?: string;
}

export type Stories = number[];

export enum StoryListsTypes {
  Top = 'top',
  New = 'new',
  Show = 'show',
  Ask = 'ask',
  Job = 'job',
}
