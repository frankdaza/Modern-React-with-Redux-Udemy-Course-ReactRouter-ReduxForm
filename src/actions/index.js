import Axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=CHANGOMAN123K';

export function fetchPosts() {
  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}