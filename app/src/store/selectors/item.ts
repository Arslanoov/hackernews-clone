import { RootState } from 'store/reducers';
import { StoryInterface } from 'types/story';
import { CommentInterface } from 'types/comment';

export const itemSelector = ({ item }: RootState) =>
  item?.story as StoryInterface | null;

export const commentsSelector = ({ item }: RootState) =>
  item?.comments as CommentInterface[];
