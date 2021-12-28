import { apiFetch } from './fetch';

export const fetchTopStories = () => {
  apiFetch('/topstories.json');
};

export const fetchStory = (id: number) => {
  apiFetch(`item/${id}.json`);
};
