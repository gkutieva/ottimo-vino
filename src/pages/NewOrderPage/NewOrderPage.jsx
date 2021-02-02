import { useState, useEffect, useRef } from 'react';
import * as itemAPI from '../../utilities/vinos-api';
import * as ordersAPI from '../../utilities/orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link, useHistory } from 'react-router-dom';
import VinoList from '../../components/VinoList/VinoList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import './NewOrderPage.css';
// import Address from '../../components/Address/Address';


export default function NewOrderPage({user, setUser, vinoItems, activeCat, setActiveCat, cart, handleAddToOrder, handleChangeQty, handleCheckout, categories}) {
 
  return (
    <main className="NewOrderPage">
      <aside>
        <CategoryList
          categories={categories.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <VinoList
       vinoItems={vinoItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
      {/* <Address 
      exact path='/adress' component={Address} */}
      
    </main>
  );

}

