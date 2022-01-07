import React from 'react';

import { UserInterface } from 'types/user';

import { formatTime } from 'utils/helpers/time';

import { Wrapper, Title, About, Links, Link } from './styles';

type Props = {
  user: UserInterface;
};

const UserSingleCard: React.FC<Props> = ({ user }) => (
  <Wrapper>
    <Title>{user.id}</Title>
    <div>Created: {formatTime(user.created)}</div>
    <div>Karma: {user.karma}</div>

    <About dangerouslySetInnerHTML={{ __html: user.about ?? '' }} />

    <Links>
      <Link
        href={`https://news.ycombinator.com/submitted?id=${user.id}`}
        target="_blank"
      >
        submissions
      </Link>
      <Link
        href={`https://news.ycombinator.com/threads?id=${user.id}`}
        target="_blank"
      >
        threads
      </Link>
    </Links>
  </Wrapper>
);

export default UserSingleCard;
