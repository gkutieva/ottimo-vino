import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Address from '../Address/Address';
import HomePage from '../HomePage/HomePage';


export default function App() {
  const [user, setUser] = useState(getUser());
  

  return (
    <main className="App">
      { user ?
          <>
            
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route exact path='/home'>
              <HomePage />
                </Route>
              <Route exact path="/orders/new">
                <NewOrderPage user={user} setUser={setUser} />
              </Route>
              <Route exact path="/orders">
                <OrderHistoryPage />
              </Route>
              <Route exact path="/address" user={user} setUser={setUser} >
              <Address />
              </Route>
            
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
