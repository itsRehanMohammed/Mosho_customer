import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const OrderDetails = ({ selectedOrder }) => {
  return (
    <div className="h-screen sm:w-[40%] border rounded-lg shadow-lg -my-4 sm:ml-5">
      <h1 className="text-[30px] font-bold text-center mb-2">ORDER SUMMARY</h1>
      {selectedOrder && (
        <div className="px-4">
          <div className="flex flex-row items-center justify-between">
            <p>
              <span className="text-[20px] font-bold">Order ID</span>
              <br />
              {selectedOrder._id}
            </p>
            {/* <p className="text-right">
              <span className="text-[20px] font-bold">Table</span>
              <br />
            </p> */}
          </div>
          <div className="flex flex-col mt-10 text-[20px]">
            <p className="flex flex-row items-center justify-between">
              <span> Name: </span>
              {selectedOrder.order_name}
            </p>
            <p className="flex flex-row items-center justify-between">
              <span> Time: </span>
              {new Date(selectedOrder.createdAt).toLocaleString()}
            </p>
            <p className="flex flex-row items-center justify-between">
              <span> Type: </span>
              {/* {selectedOrder.type} */}
            </p>
            <p className="flex flex-row items-center justify-between">
              <span> Status: </span>
              {selectedOrder.delivery_status}
            </p>
            <p className="flex flex-row items-center justify-between mt-4 text-[20px] font-bold">
              <span> Total Price: </span>₹{selectedOrder.order_price}
            </p>
            <p className="flex flex-row items-center justify-between mt-20">
              <span className="text-[20px] font-bold"> Customer Details: </span>
            </p>
            <p className="flex flex-row items-center justify-between mt-4">
              <span> Name: </span>
              {selectedOrder.customer_name}
            </p>
            <p className="flex flex-row items-center justify-between mt-4">
              <span> Phone: </span>
              {selectedOrder.contactNumber}
            </p>
            <p className="flex flex-row items-center justify-between mt-4">
              <span> Email: </span>
              {selectedOrder.customer_email}
            </p>
            <p className="flex flex-row items-center justify-between mt-4">
              <span className="text-[20px] font-bold"> Address: </span>
              {selectedOrder.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Orders = ({ setActivePage }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderClick, setOrderClick] = useState(false);
  const [Orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const response = await fetch("https://mosho.onrender.com/api/orders");
    const data = await response.json();
    setOrders(data);
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };
  return (
    <div className="container my-5 flex flex-col sm:flex-row sm:w-full">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[35px] font-bold text-center mb-5">Orders</h1>

        {Orders.some((order) => order.customer_email === localStorage.getItem("email")) ? (
          Orders.map((order, index) =>
            order.customer_email === localStorage.getItem("email") ? (
              // Display orders here
              <div
                className={`flex flex-col sm:flex-row items-start justify-between w-full sm:w-[90%] mx-auto border-2 
              border-green-200 my-4 p-3 rounded-xl shadow-lg cursor-pointer hover:scale-[101%] transform ease-in-out`}
                key={index}
                onClick={() => {
                  handleOrderClick(order);
                  setOrderClick(true);
                }}
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-[20px] font-bold">Order ID: {order._id} </h1>
                  <span className="text-[18px]"> {order.order_name} </span>
                  <span> {order.table} </span>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-[20px] font-bold"> {order.order_price}₹ </h1>
                  <span> {new Date(order.createdAt).toLocaleString()} </span>

                  <span className="bg-blue-100 p-2 rounded-xl"> {order.delivery_status} </span>
                </div>
              </div>
            ) : null
          )
        ) : (
          <div
            className="flex flex-col items-center justify-between w-[90%] mx-auto 
                my-4 p-3 text-lg "
          >
            <h2>Sad To Inform You That, You've Not Ordered Any Meal Yet</h2>
            <h4>
              Not to worry!{" "}
              <Link style={{ color: "#047aed" }} to={"/menu"}>
                Order Now{" "}
              </Link>
            </h4>
            <img src="../assets/no_courses.png" alt="" />
          </div>
        )}
      </div>
      {orderClick && <OrderDetails setActivePage={setActivePage} selectedOrder={selectedOrder} />}
    </div>
  );
};

export default Orders;
