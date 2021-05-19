import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  username: '',
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true, username: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false, username: '' };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false, username: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
