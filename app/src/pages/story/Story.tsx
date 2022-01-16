import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStores } from 'hooks/useStores';

import { ItemInterface } from 'types/item';
import { CommentsTree } from 'types/comment';

import MainLayout from 'layouts/main/MainLayout';
import StorySingleCard from 'components/common/card/story/single/StorySingleCard';
import CommentListCard from 'components/common/card/comment/list/CommentListCard';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

const Story = () => {
  const params = useParams();
  const { itemStore } = useStores();

  const { story, comments } = itemStore;

  useEffect(() => {
    itemStore.fetchItemWithComments(Number(params.id));

    return () => {
      itemStore.clearItemWithComments();
    };
  }, []);

  return (
    <MainLayout>
      <Container>
        <FullContent>
          {story && (
            <>
              <StorySingleCard story={story as ItemInterface} />
              <CommentListCard
                comments={comments as CommentsTree}
                storyId={(story as ItemInterface).id}
              />
            </>
          )}
        </FullContent>
      </Container>
    </MainLayout>
  );
};

export default observer(Story);
