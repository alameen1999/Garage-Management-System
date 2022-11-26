import React, { useState } from 'react';

// let logoutTimer;

const AuthContext = React.createContext({
  user:{},
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  setUser:(user)=>{},
  logout: () => {},
});

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem('token');
  // const storedExpirationDate = localStorage.getItem('expirationTime');

  // const remainingTime = calculateRemainingTime(storedExpirationDate);

  // if (remainingTime <= 3600) {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('expirationTime');
  //   return null;
  // }

  // return {
  //   token: storedToken,
  //   duration: remainingTime,
  // };
// };

export const AuthContextProvider = (props) => {
  // const tokenData = retrieveStoredToken();
  
  // let initialToken;
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }

  const [token, setToken] = useState(null);
  const [user, setUser] = useState({userName:''})
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
  };
  //   localStorage.removeItem('token');
  //   // localStorage.removeItem('expirationTime');

  //   if (logoutTimer) {
  //     clearTimeout(logoutTimer);
  //   }
  // }, []);

  const loginHandler = (token) => {
    setToken(token);
  };
  const userDetailsHandler=(user)=>{
    setUser(user)
  }
    // localStorage.setItem('token', token);
    // localStorage.setItem('expirationTime', expirationTime);

    // const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  

  // useEffect(() => {
  //   if (tokenData) {
  //     console.log(tokenData.duration);
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    user: user,
    login: loginHandler,
    setUser: userDetailsHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
