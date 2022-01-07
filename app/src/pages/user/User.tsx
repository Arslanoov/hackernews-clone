import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import MainLayout from 'layouts/main/MainLayout';
import UserSingleCard from 'components/common/card/user/single/UserSingleCard';

import { FullContent } from 'components/styled/content';

import { Wrapper } from './styles';

const User = () => {
  const params = useParams();
  const { fetchUser, clearUser } = useActions();

  const user = useSelector((state) => state.user?.current);

  useEffect(() => {
    fetchUser(params.username ?? '');

    return () => {
      clearUser();
    };
  }, [params.username]);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>
          <Wrapper>{user && <UserSingleCard user={user} />}</Wrapper>
        </FullContent>
      </div>
    </MainLayout>
  );
};

export default User;
