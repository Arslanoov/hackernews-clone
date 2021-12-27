import React from 'react';

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

const CardItem = () => (
  <Wrapper>
    <Score>138</Score>
    <div>
      <Row>
        <Title>Title</Title>
        <Source>(Source)</Source>
      </Row>
      <Row>
        <Author>By ...</Author>
        <Line />
        <CommentsCount>0 comments</CommentsCount>
      </Row>
    </div>
  </Wrapper>
);

export default CardItem;
