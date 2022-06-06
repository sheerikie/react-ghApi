import * as ActionTypes from '../actionTypes';

const GithubReducer =(state, action) => {
  switch (action.type) {
    case ActionTypes.CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
        
      };

    case ActionTypes.GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
     
      };

    case ActionTypes.GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      
      };

    case ActionTypes.SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
       
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
export default GithubReducer;