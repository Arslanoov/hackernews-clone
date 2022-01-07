export enum ItemTypes {
  Story = 'story',
  Job = 'job',
  Comment = 'comment',
}

export interface ItemInterface {
  id: number;
  by: string;
  score: number;
  title: string;
  type: ItemTypes;
  descendants: number;
  kids: number[];
  url?: string;
}
