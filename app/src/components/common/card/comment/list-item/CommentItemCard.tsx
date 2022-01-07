import React from 'react';

import { CommentInterface } from 'types/comment';

import { Wrapper, HeaderRow, Author, Content, Replies } from './styles';

type Props = {
  comment: CommentInterface;
  storyId: number;
};

const CommentItemCard: React.FC<Props> = ({ comment, storyId }) => (
  <Wrapper>
    <HeaderRow>
      <Author>{comment.by}</Author>
      <div>5 hours ago</div>
    </HeaderRow>
    <Content dangerouslySetInnerHTML={{ __html: comment.text ?? '' }} />
    {comment.kids && comment.kids.length > 0 && comment.parent === storyId && (
      <Replies>{comment.kids.length} replies collapsed</Replies>
    )}
  </Wrapper>
);

export default CommentItemCard;
