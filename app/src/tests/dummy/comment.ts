import { CommentInterface } from 'types/comment';
import { ItemTypes } from 'types/item';

export const commentMock: CommentInterface = {
  id: 1,
  by: 'Author',
  score: 10,
  title: 'Title',
  time: 14618471,
  descendants: 0,
  type: ItemTypes.Comment,
};
