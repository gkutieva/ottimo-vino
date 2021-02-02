import { useState, useEffect, useRef } from 'react';
import * as vinoAPI from '../../utilities/vinos-api';
import * as ordersAPI from '../../utilities/orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link, useHistory } from 'react-router-dom';
import VinoList from '../../components/VinoList/VinoList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import './NewOrderPage.css';



export default function NewOrderPage({user, setUser}) {
  const [vinoItems, setVinoItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();

  useEffect(function () {
    async function getItems() {
       const vinos = await vinoAPI.getAll();

      categoriesRef.current = vinos?.reduce((cats, vino) => {
        const cat = vino?.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setVinoItems(vinos);
      setActiveCat(vinos[0]?.category.name);
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
  async function handleAddToOrder(vinoId) {
    const cart = await ordersAPI.addItemToCart(vinoId);
    setCart(cart);
  }

  async function handleChangeQty(vinoId, newQty) {
    const cart = await ordersAPI.setItemQtyInCart(vinoId, newQty);
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    history.push('/address');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <VinoList
       vinoItems={vinoItems.filter(vino => vino.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />    
    </main>
  );

}

