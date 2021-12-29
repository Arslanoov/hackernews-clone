import axios from 'axios';

if (!process.env.REACT_APP_API_URL) {
  throw new Error('API url required');
}

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
