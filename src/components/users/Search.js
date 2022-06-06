import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const  setAlert  = alertContext;

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '' || text === ' ') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.profileSearch(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          data-testid="search"
          className="btn btn-dark"
        />
      </form>
      {githubContext? githubContext.users.length > 0 && (
        <button
          className="btn light"
          onClick={githubContext.removeResults}
        >
          Clear Results
        </button>
      ):null}
    </div>
  );
};

export default Search;
