import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import { currentUserSelector } from 'store/selectors/user';

import MainLayout from 'layouts/main/MainLayout';
import UserSingleCard from 'components/common/card/user/single/UserSingleCard';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

import { Wrapper } from './styles';

const User = () => {
  const params = useParams();
  const { fetchUser, clearUser } = useActions();

  const user = useSelector(currentUserSelector);

  useEffect(() => {
    fetchUser(params.username ?? '');

    return () => {
      clearUser();
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
