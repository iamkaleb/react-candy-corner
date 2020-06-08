import React, { useState } from 'react';
import './CandyCorner.css';
import Login from './auth/Login'
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'

const CandyCorner = () => {
  
  const isAuthenticated = () => sessionStorage.getItem("credentials") !==null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
      sessionStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
  };

  const clearUser = () => {
      sessionStorage.clear();
      setHasUser(isAuthenticated());
  }

  return (
    <>
      {hasUser
      ? <NavBar
          hasUser={hasUser}
          clearUser={clearUser}
        />
      : null}
      {hasUser
      ? <ApplicationViews
          hasUser={hasUser}
          setUser={setUser}
        />
      : null}
      {!hasUser  
      ? <Login 
          hasUser={hasUser} 
          setUser={setUser}
        />
      : null}
    </>
  );

};

export default CandyCorner;
