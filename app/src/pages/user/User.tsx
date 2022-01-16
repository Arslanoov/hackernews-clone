import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStores } from 'hooks/useStores';

import MainLayout from 'layouts/main/MainLayout';
import UserSingleCard from 'components/common/card/user/single/UserSingleCard';

import { Container } from 'components/styled/container';
import { FullContent } from 'components/styled/content';

import { Wrapper } from './styles';

const User = () => {
  const params = useParams();
  const { userStore } = useStores();

  const user = userStore.current;

  useEffect(() => {
    userStore.fetchUser(params.username ?? '');

    return () => {
      userStore.clearUser();
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

export default observer(User);
