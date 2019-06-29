import React from 'react';
import PropTypes from 'prop-types';

import OrderRow from '../OrderRow/OrderRow';
import './Orders.scss';
import orderShape from '../../helpers/propz/orderShape';

class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShape.orderShape),
  }

  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} />
    ));

    return (
      <div className="Orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
