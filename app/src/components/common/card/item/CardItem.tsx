import React from 'react';

import { ItemInterface } from 'types/item';

import {
  Wrapper,
  Score,
  Title,
  Source,
  Author,
  Line,
  CommentsCount,
  Row,
} from './styles';

type Props = {
  item: ItemInterface;
};

const CardItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <Score>{item.score}</Score>
    <div>
      <Row>
        <Title>{item.title}</Title>
        <Source href={item.url}>({item.url})</Source>
      </Row>
      <Row>
        <Author>By {item.by}</Author>
        <Line />
        <CommentsCount>{item.descendants} comments</CommentsCount>
      </Row>
    </div>
  </Wrapper>
);

export default CardItem;
