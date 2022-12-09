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
import RevenueReport from './components/Profile/RevenueReport';
import JobCard from './components/Profile/JobCard';
import EstimationPage from './pages/EstimationPage';
import Invoice from './components/Profile/invoice';
import SheetDisplay from './components/EmployeeDetails/EmployeeDisplay/SheetDisplay';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>

      {authCtx.isLoggedIn && ( 
      <Route path="/employee/managerslist" component={SheetDisplay}/>
      )}

        {!authCtx.isLoggedIn && (
          <Route path='/' exact>
            <HomePage />
          </Route>
        )}

        {authCtx.isLoggedIn && (

          <Route path='/' exact>
            <Loggedin />
          </Route>
        )}

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
            <AddProduct />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/inventory'>
          {authCtx.isLoggedIn &&
            <Inventory />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>


        
        <Route path='/employeeDetails'>
          {authCtx.isLoggedIn &&
            <EmployeeDisplay />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/revenuereport'>
          {authCtx.isLoggedIn &&
            <RevenueReport />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/jobcard'>
          {authCtx.isLoggedIn &&
            <JobCard/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/estimationDetails'>
          {authCtx.isLoggedIn &&
            <EstimationPage/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/invoice'>
          {authCtx.isLoggedIn &&
            <Invoice/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
