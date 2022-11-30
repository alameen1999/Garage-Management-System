import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import Loggedin from './pages/Loggedin';
import AddProduct from './components/Profile/AddProduct';
import Inventory from './components/Profile/Inventory';
import EmployeeDisplay from './pages/EmployeeDisplay';
import EstimationPage from './pages/EstimationPage';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>

      {/* {authCtx.isLoggedIn && ( 
        <Route path='/useraccount' exact>
          <Loggedin/>
        </Route>
        )} */}



        {!authCtx.isLoggedIn && ( 
        <Route path='/' exact>
          <HomePage />
        </Route>
        )}

{authCtx.isLoggedIn && ( 

<Route path='/' exact>
 <Loggedin/>
 </Route>
)}
  <Route path = '/employeedetails'> <EmployeeDisplay/> </Route>
 

        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && 
          <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/addProduct'>
          {authCtx.isLoggedIn && 
          <AddProduct/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/inventory'>
          {authCtx.isLoggedIn && 
          <Inventory/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>


       
        <Route path = '/employeeDetails'>
        {authCtx.isLoggedIn && 
           <EmployeeDisplay/> }
           {!authCtx.isLoggedIn && <Redirect to='/auth' />}
           </Route>
           



      


        {/* <Route path='/useraccount'>
          {authCtx.isLoggedIn && 
          <Loggedin/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route> */}



        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
