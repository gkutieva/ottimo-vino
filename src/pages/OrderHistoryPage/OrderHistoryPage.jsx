import {useState, useEffect} from 'react';
import * as ordersAPI from '../../utilities/orders-api';


export default function OrderHistoryPage() {
  const [pastOrders, setPastOrders] = useState(null);
  useEffect(() => {
    ordersAPI.getPastOrders().then(res => setPastOrders(res));
  }, []) 
 

  return (
    <>
      {
        pastOrders && (
          <div>
            <h1>Here are all your past orders</h1>
            {pastOrders.map((order, idx) => (
              <div>
                {order.orderTotal}
              </div>
            ))}
          </div>
        )
      }
     
    </>
  );
}