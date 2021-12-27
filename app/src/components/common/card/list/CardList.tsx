import React from 'react';

import CardItem from 'components/common/card/item/CardItem';

import { List, ListItem } from './styles';

const CardList = () => (
  <List>
    <ListItem>
      <CardItem />
    </ListItem>
    <ListItem>
      <CardItem />
    </ListItem>
    <ListItem>
      <CardItem />
    </ListItem>
  </List>
);

export default CardList;
