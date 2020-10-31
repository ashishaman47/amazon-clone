import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users') //getting the users collection
        .doc(user?.uid) // getting the specific user that is logged in at that time
        .collection('orders') // accessing that users order collection
        .orderBy('created', 'desc') // then ordering that users order with the most recent one at the top
        .onSnapshot((snapshot) => {
          // going through the list of orders, storing each of orders data into data and then storing them in the order array
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      {/* displaying your orders by dates in desc order */}
      <div className='orders__order'>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
