import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector } from 'hooks/useSelector';

import {
  fetchUser,
  clearItemWithComments as clearUser,
  currentUserSelector,
} from 'store/slices/user';

import MainLayout from 'layouts/main/MainLayout';
import UserSingleCard from 'components/common/card/user/single/UserSingleCard';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

import { Wrapper } from './styles';

const User = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(fetchUser(params.username ?? ''));

    return () => {
      dispatch(clearUser());
    };
  }, [params.username]);

  return (
    <MainLayout>
      <Container>
        <FullContent>
          <Wrapper>{user && <UserSingleCard user={user} />}</Wrapper>
        </FullContent>
      </Container>
    </MainLayout>
  );
};

export default User;
