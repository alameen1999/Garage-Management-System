import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';
import image from '../images/landingpage.jpg';
import AboutUs from '../About/AboutUs';
// import picture from '../images/iconimage.png';


const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>

      {/* <div className={classes.headericon}>
        <img src={picture}/>  
      </div> */}
      <div className={classes.headericon}></div>

      <Link to='/'>
        <div className={classes.logo}>Automotive</div>
      </Link>
      <nav>
        <ul>
        {/* {!isLoggedIn && (

          <li>
            <a href='#About'>About</a>
          </li>
          )} */}
          {!isLoggedIn && (

            <li>
           <Link to='/auth'>Login</Link>
            </li>
          )}
          
          {isLoggedIn && (
            
            <li >
             <strong className='text-light'>Welcome  {authCtx.user.userName}</strong> 
             {/* <br></br><Link to='/profile'>profile</Link> */}
            </li>

          )}
          {isLoggedIn && (
            
              <button onClick={logoutHandler}>Logout</button>
            
          )}
        </ul>
      </nav>
      
    </header>
    
  );
};

export default MainNavigation;






// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// import AuthContext from '../../store/auth-context';
// import classes from './MainNavigation.module.css';
// import image from '../images/landingpage.jpg';
// import AboutUs from '../About/AboutUs';
// import picture from '../images/iconimage.png';


// const MainNavigation = () => {
//   const authCtx = useContext(AuthContext);

//   const isLoggedIn = authCtx.isLoggedIn;

//   const logoutHandler = () => {
//     authCtx.logout();
//     // optional: redirect the user
//   };

//   return (
//     <header className={classes.header}>

//       <div className={classes.headericon}>
//         <img src={picture}/>  
//       </div>

//       <Link to='/'>
//         <div className={classes.logo}>Automotive</div>
//       </Link>
//       <nav>
//         <ul>
//           {!isLoggedIn && (

//             <li>
//            <Link to='/auth'>Login</Link>
//             </li>
//           )}
//           {isLoggedIn && (
            
//             <li >
//               <strong className='text-light'>Welcome  {authCtx.user.userName}</strong> <Link to='/profile'>Profile</Link>
//             </li>

//           )}
//           {isLoggedIn && (
            
//               <button onClick={logoutHandler}>Logout</button>
            
//           )}
//         </ul>
//       </nav>
      
//     </header>
    
//   );
// };

// export default MainNavigation;
