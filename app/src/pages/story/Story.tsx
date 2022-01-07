import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import MainLayout from 'layouts/main/MainLayout';
import StorySingleCard from 'components/common/card/story/single/StorySingleCard';
import CommentListCard from 'components/common/card/comment/list/CommentListCard';

import { ItemInterface } from 'types/item';
import { CommentsTree } from 'types/comment';

import { FullContent } from 'components/styled/content';

const Story = () => {
  const params = useParams();
  const { fetchItemWithComments, clearItemWithComments } = useActions();

  const story = useSelector((state) => state.item?.story);
  const comments = useSelector((state) => state.item?.comments);

  useEffect(() => {
    fetchItemWithComments(Number(params.id));

    return () => {
      clearItemWithComments();
    };
  }, []);

  return (
    <MainLayout>
      <div className="container">
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
      </div>
    </MainLayout>
  );
};

export default Story;
