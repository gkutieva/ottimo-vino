import {useState, useEffect} from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';


export default function OrderHistoryPage() {
  const [pastOrders, setPastOrders] = useState(null);
  useEffect(() => {
    ordersAPI.getPastOrders().then(res => setPastOrders(res));
  }, []) 
 

  return (
    <>
            <section>
                <div className="container">
                    <div className=" had-pro-col">
                        <div id="product">
                            <div className="row">
                                <div className="col-md-6 col-sm-4 col-xl-4">
                                    <div className="pro_title">
                                        <h4>Product</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Price</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Quantity</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Subtotal</h4>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    </div>
                    </section>
      {
        pastOrders && (
          <div>
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