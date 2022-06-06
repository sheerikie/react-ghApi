import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import GithubActions from './context/github/githubProvider';
import AlertProvider from './context/alert/alertProvider';
import Home from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';

const App = () => {
  return (
    <GithubActions>
      <AlertProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Routes >
								<Route path='/' element={<Home />} />
								<Route path='/user/:id' element={<User />} />
								<Route path='/ErrorPage' element={<ErrorPage />} />
								<Route path='/*' element={<ErrorPage />} />
							</Routes>
            </div>
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubActions>
  );
};

export default App;

