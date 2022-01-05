export interface ItemInterface {
  id: number;
  by: string;
  descendants: number;
  score: number;
  title: string;
  type: string;
  url: string;
}

export type Stories = number[];

export enum StoryListsTypes {
  Top = 'top',
  New = 'new',
  Show = 'show',
  Ask = 'ask',
  Job = 'job',
}
