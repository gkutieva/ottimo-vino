import { useState, useRef, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Address from '../Address/Address';
import * as vinosAPI from '../../utilities/vinos-api';
import * as ordersAPI from '../../utilities/orders-api';
import HomePage from '../HomePage/HomePage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [vinoItems, setVinoItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();

  useEffect(function () {
    async function getItems() {
       const items = await vinosAPI.getAll();

      categoriesRef.current = items?.reduce((cats, item) => {
        const cat = item?.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setVinoItems(items);
      setActiveCat(items[0]?.category.name);
    }
    getItems();

    // // load the user's cart
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  // /*--- Event Handlers --- */
  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    history.push('/orders');
  }

  return (
    <main className="App">
      { 
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/">
                <HomePage />
              </Route>
              <Route path='/login'> 
                <AuthPage setUser={setUser} />
              </Route>
              <Route path='/orders/new'> 
                <NewOrderPage user={user} setUser={setUser}
                  categories={categoriesRef.current}
                  activeCat={activeCat}
                  setActiveCat={setActiveCat}
                  handleAddToOrder={handleAddToOrder}
                  order={cart}
                  handleChangeQty={handleChangeQty}
                  handleCheckout={handleCheckout}
                  // vinoItems={vinoItems}
                />
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Route path="/address" user={user} setUser={setUser} />
              <Address />
              <Redirect to="/" />
            </Switch>
          </>
 }
    </main>
  );
}
