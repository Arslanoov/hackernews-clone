import React from 'react';

import CardItem from 'components/common/card/story/list-item/StoryItemCard';

import { StoryInterface } from 'types/story';

import { List, ListItem } from './styles';

type Props = {
  stories: StoryInterface[];
};

const StoryListCard: React.FC<Props> = ({ stories }) => (
  <List>
    {stories.map(
      (item) =>
        item && (
          <ListItem key={item.id}>
            <CardItem story={item} />
          </ListItem>
        )
    )}
  </List>
);

export default StoryListCard;
