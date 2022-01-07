import produce from 'immer';

import { StoriesAction } from 'store/actions/stories';
import { StoriesActionType } from 'store/action-types/stories';

import { StoryInterface } from 'types/story';

interface StoriesState {
  stories: StoryInterface[];
  lists: {
    top: number[];
    new: number[];
    show: number[];
    ask: number[];
    job: number[];
  };
}

const initialState: StoriesState = {
  stories: [],
  lists: {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: [],
  },
};

const reducer = produce(
  (state: StoriesState = initialState, action: StoriesAction) => {
    switch (action.type) {
      case StoriesActionType.SET_LIST:
        state.lists[action.payload.list] = action.payload.listItems;
        return state;

      case StoriesActionType.SET_STORIES_LIST:
        state.stories = action.payload.items;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
