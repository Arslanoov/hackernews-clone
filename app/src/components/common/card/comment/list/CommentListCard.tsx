import React from 'react';

import { CommentsTree } from 'types/comment';

import CommentItemCard from 'components/common/card/comment/list-item/CommentItemCard';

import { Wrapper } from './styles';

type Props = {
  comments: CommentsTree;
  storyId: number;
};

const CommentListCard: React.FC<Props> = ({ comments, storyId }) => (
  <Wrapper>
    {comments.map((comment) => (
      <CommentItemCard key={comment.id} storyId={storyId} comment={comment} />
    ))}
  </Wrapper>
);

export default CommentListCard;
