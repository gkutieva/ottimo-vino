import { useState, useEffect, useRef } from 'react';
import * as itemAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link, useHistory } from 'react-router-dom';
import VinoList from '../../components/VinoList/VinoList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';



export default function NewOrderPage({user, setUser}) {
  const [VinoItems, setVinoItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();

  useEffect(function () {
    async function getItems() {
      const items = await itemAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setVinoItems(items);
      setActiveCat(items[0].category.name);
    }
    getItems();

    // load the user's cart
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers --- */
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
       VinoItems={VinoItems.filter(item => item.category.name === activeCat)}
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

