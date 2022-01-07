import React from 'react';

import { StoryInterface } from 'types/story';

import {
  Wrapper,
  Score,
  Title,
  Source,
  Author,
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
            <Title>{story.title}</Title>
            <Source href={story.url} target="_blank">
              ({story.url})
            </Source>
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
        <Author>By {story.by}</Author>
        {story.descendants && (
          <>
            <Line />
            <CommentsCount>{story.descendants} comments</CommentsCount>
          </>
        )}
      </Row>
    </div>
  </Wrapper>
);

export default StoryItemCard;
