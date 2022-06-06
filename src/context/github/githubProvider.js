import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import * as ActionTypes from '../actionTypes';

  const githubUrl = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubToken = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubActions = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const profileSearch = async text => {
    setLoading();

    const url = `https://api.github.com/search/users?q=${text}&client_id=${githubUrl}&client_secret=${githubToken}`;

  
    const response = await fetch(url);
    let res = await response.json()

    dispatch({
      type: ActionTypes.SEARCH_USERS,
      payload: res.items,
    });
  };

  // Get User
  const getUser = async username => {
    setLoading();
    const url = `https://api.github.com/users/${username}?client_id=${githubUrl}&client_secret=${githubToken}`;
  
    const response = await fetch(url);
    let res = await response.json()

    dispatch({
      type: ActionTypes.GET_USER,
      payload: res,
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    setLoading();

    const url = `https://api.github.com/users/${username}/repos?per_page=15&sort=created:asc&client_id=${githubUrl}&client_secret=${githubToken}`;

    const response = await fetch(url);
    let res = await response.json()
    dispatch({
      type: ActionTypes.GET_REPOS,
      payload: res,
    });
  };

  // Clear Users
  const removeResults = () => dispatch({ type: ActionTypes.CLEAR_USERS });
  // Set Loading
  const setLoading = () => dispatch({ type: ActionTypes.SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUser,
        getUserRepos,
        profileSearch,
        removeResults
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubActions;
