import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector } from 'hooks/useSelector';

import {
  clearStoriesList,
  fetchStoriesList,
  fetchListItems,
  storiesSelector,
  storiesTotalCountSelector,
} from 'store/slices/stories';

import { STORIES_PER_PAGE } from 'config/pagination';

import { StoryListsTypes } from 'types/story';

import MainLayout from 'layouts/main/MainLayout';
import StoryListCard from 'components/common/card/story/list/StoryListCard';
import Pagination from 'components/common/pagination/Pagination';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

const Stories = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const type = params.type as StoryListsTypes;

  const [page, setPage] = useState<number>(1);

  const itemsList = useSelector(storiesSelector);
  const totalCount = useSelector((state) =>
    storiesTotalCountSelector(type)(state)
  );

  useEffect(() => {
    async function fetchListAndItems() {
      setPage(1);
      await dispatch(fetchStoriesList(type));
      await dispatch(
        fetchListItems({
          type,
          page: 1,
        })
      );
    }
    fetchListAndItems();

    return () => {
      dispatch(clearStoriesList());
    };
  }, [params.type]);

  useEffect(() => {
    if (itemsList?.length !== 0) {
      dispatch(
        fetchListItems({
          type,
          page,
        })
      );
    }
  }, [page]);

  return (
    <MainLayout>
      <Container>
        <FullContent>
          <Pagination
            pagesCount={Math.floor(totalCount / STORIES_PER_PAGE)}
            currentPage={page}
            setPage={setPage}
          />
          <StoryListCard stories={itemsList} />
        </FullContent>
      </Container>
    </MainLayout>
  );
};

export default Stories;
