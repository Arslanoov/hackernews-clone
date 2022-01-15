import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector } from 'hooks/useSelector';

import {
  fetchItemWithComments,
  clearItemWithComments,
  itemSelector,
  commentsSelector,
} from 'store/slices/item';

import { ItemInterface } from 'types/item';
import { CommentsTree } from 'types/comment';

import MainLayout from 'layouts/main/MainLayout';
import StorySingleCard from 'components/common/card/story/single/StorySingleCard';
import CommentListCard from 'components/common/card/comment/list/CommentListCard';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

const Story = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const story = useSelector(itemSelector);
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    dispatch(fetchItemWithComments(Number(params.id)));

    return () => {
      dispatch(clearItemWithComments());
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

export default Story;
