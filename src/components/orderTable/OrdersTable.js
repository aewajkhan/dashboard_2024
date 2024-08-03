import React from "react";
import "./OrdersTable.css";

const OrdersTable = ({ title }) => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$305.62",
      status: "Delivered",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78985215",
      amount: "$45.88",
      status: "Cancelled",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
      photo:
        "https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="orders-table-container">
      <h3 className="orders-title">{title}</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={order.status.toLowerCase()}>
              <td className="customer-cell">
                <img
                  src={order.photo}
                  alt={order.customer}
                  className="customer-photo"
                />
                <span>{order.customer}</span>
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
