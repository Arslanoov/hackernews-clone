import React from 'react';

import { CommentInterface } from 'types/comment';

import { formatTime } from 'utils/helpers/time';

import { Wrapper, HeaderRow, Author, Content, Replies } from './styles';

type Props = {
  comment: CommentInterface;
  storyId: number;
};

const CommentItemCard: React.FC<Props> = ({ comment, storyId }) => (
  <Wrapper>
    <HeaderRow>
      <Author to={`/user/${comment.by}`}>{comment.by}</Author>
      <div>{formatTime(comment.time)}</div>
    </HeaderRow>
    <Content dangerouslySetInnerHTML={{ __html: comment.text ?? '' }} />
    {comment.kids && comment.kids.length > 0 && comment.parent === storyId && (
      <Replies>{comment.kids.length} replies collapsed</Replies>
    )}
  </Wrapper>
);

export default CommentItemCard;
