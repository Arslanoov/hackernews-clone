import React from 'react';

import { formatTime } from 'utils/helpers/time';

import { ItemInterface } from 'types/item';

import { Wrapper, Title, Row, Score, Author, Time } from './styles';

type Props = {
  story: ItemInterface;
};

const StorySingleCard: React.FC<Props> = ({ story }) => (
  <Wrapper>
    <Title>{story.title}</Title>
    <Row>
      <Score>{story.score} points</Score>| by
      <Author to={`/user/${story.by}`}>{story.by}</Author>
      <Time>{formatTime(story.time)}</Time>
    </Row>
  </Wrapper>
);

export default StorySingleCard;
