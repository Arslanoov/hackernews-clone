if (!process.env.REACT_APP_API_URL) {
  throw new Error('API url required');
}

// @ts-ignore
export const apiFetch = (url: string) =>
  fetch(`${process.env.REACT_APP_API_URL}${url}`);
