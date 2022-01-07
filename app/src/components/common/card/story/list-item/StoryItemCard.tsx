import React from 'react';

import { StoryInterface } from 'types/story';

import {
  Wrapper,
  Score,
  Title,
  Source,
  Author,
  AuthorUnderline,
  Line,
  CommentsCount,
  Row,
  SourceLink,
} from './styles';

type Props = {
  story: StoryInterface;
};

const StoryItemCard: React.FC<Props> = ({ story }) => (
  <Wrapper>
    <Score>{story.score}</Score>
    <div>
      {story.url ? (
        <Source href={story.url} target="_blank">
          <Row>
            <Title>{story.title}</Title>({story.domainUrl})
          </Row>
        </Source>
      ) : (
        <SourceLink to={`/story/${story.id}`}>
          <Row>
            <Title>{story.title}</Title>
          </Row>
        </SourceLink>
      )}
      <Row>
        <Author to={`/user/${story.by}`}>
          By <AuthorUnderline>{story.by}</AuthorUnderline>
        </Author>
        {(story.descendants || story.descendants === 0) && (
          <>
            <Line />
            <SourceLink to={`/story/${story.id}`}>
              <CommentsCount>{story.descendants} comments</CommentsCount>
            </SourceLink>
          </>
        )}
      </Row>
    </div>
  </Wrapper>
);

export default StoryItemCard;
