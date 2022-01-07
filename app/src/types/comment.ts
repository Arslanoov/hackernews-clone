import { ItemInterface, ItemTypes } from 'types/item';

export interface CommentInterface extends ItemInterface {
  type: ItemTypes.Comment;
  text?: string;
  parent?: number;
  comments?: CommentInterface[];
}

export type CommentsTree = CommentInterface[];
