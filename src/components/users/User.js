import React, { useEffect, useContext } from 'react';
import { useParams} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import Loader from '../utilities/loader';


const User = () => {
  const githubContext = useContext(GithubContext);
  const {
    getUser,
    repos,
    getUserRepos,
    loading,
    user: {
      login,
      bio,
      avatar_url,
      html_url,
      company,
      blog,
      public_gists,
      public_repos,
      followers,
      following,
      location,
      name,
    },
 
  } = githubContext;
  const params = useParams();
  useEffect(() => {
    getUser(params.id);
    getUserRepos(params.id);
  }, [getUser,getUserRepos,params.id]);

  if (loading) return <h3 style={Loader.loaderStyle }>Loading ......</h3>;

  return (
    <>
      <div className="flexBox grid-2">
        <div className="avatar-div">
          <img
            src={avatar_url}
            className="avatar-img"
            alt={login}
          />
        </div>

        <div>
          <h1>About {name}</h1>
        
          {location && (
            <>
              
              <b>Location:</b> {location}
            </>
          )}
          {bio && (
            <>
              
              <b>Bio:</b> {bio}
            </>
          )}
          
          <ul>
            <li>
              {login && (
                <>
                  <b>Username:</b> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <b>Company:</b> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <b>Website:</b> <a href={blog}>{blog}</a>
                </>
              )}
            </li>
          </ul>
          <a href={html_url} className="btn btn-dark my-1">
            View My Github Profile
          </a>
        </div>
    
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
      </div>
      {repos}
      <Repos repos={repos} />
    </>
  );
};

export default User;
