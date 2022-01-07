import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useSelector } from 'hooks/useSelector';

import MainLayout from 'layouts/main/MainLayout';
import UserSingleCard from 'components/common/card/user/single/UserSingleCard';

import { FullContent } from 'components/styled/content';

const User = () => {
  const params = useParams();
  const { fetchUser } = useActions();

  const user = useSelector((state) => state.user?.current);

  useEffect(() => {
    fetchUser(params.username ?? '');
  }, [params.username]);

  return (
    <MainLayout>
      <div className="container">
        <FullContent>{user && <UserSingleCard user={user} />}</FullContent>
      </div>
    </MainLayout>
  );
};

export default User;
