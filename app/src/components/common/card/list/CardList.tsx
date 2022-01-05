import React from 'react';

import CardItem from 'components/common/card/item/CardItem';

import { ItemInterface } from 'types/item';

import { List, ListItem } from './styles';

type Props = {
  items: ItemInterface[];
};

const CardList: React.FC<Props> = ({ items }) => (
  <List>
    {items.map(
      (item) =>
        item && (
          <ListItem key={item.id}>
            <CardItem item={item} />
          </ListItem>
        )
    )}
  </List>
);

export default CardList;
