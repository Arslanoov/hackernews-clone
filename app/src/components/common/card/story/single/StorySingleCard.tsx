import React from 'react';

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
      <Author>{story.by}</Author>
      <Time>6 hours ago</Time>
    </Row>
  </Wrapper>
);

export default StorySingleCard;
