import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PaymentSuccess = ({ cart }) => {
  const search = useSearchParams()[0];
  const refernce_id = search.get("reference");
  const navigate = useNavigate();
  const meal_names = cart.map((item) => item.name).join(", ");
  const meal_quantity = cart.map((item) => item.qty).join(", ");
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  console.log("Total Price:", totalPrice, meal_quantity, meal_names); // Output: Total Price: 60
  // const location = useLocation();
  useEffect(() => {
    const postOrder = async () => {
      console.log("enter");
      const response = await fetch("https://mosho.onrender.com/api/order", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },

        body: JSON.stringify({
          address: JSON.parse(localStorage.getItem("address")),
          contactNumber: JSON.parse(localStorage.getItem("contactInfo")).phoneNo,
          customer_name: JSON.parse(localStorage.getItem("contactInfo")).name,
          customer_email: localStorage.getItem("email"),
          order_name: meal_names,
          order_qty: meal_quantity,
          order_price: totalPrice,
        }),
      });
      const order_data = await response.json();
      if (order_data.success) {
        sessionStorage.removeItem("cart");
      }
      console.log(order_data);
    };
    if (refernce_id) {
      postOrder();
      setTimeout(() => {
        navigate("/orders");
      }, 3000);
    }
  }, []);

  return (
    <div className="payment_success">
      <div className="success_icon">
        <CheckCircleIcon sx={{ fontSize: "60px", color: "green" }} />
      </div>
      <h1>PAYMENT SUCCESSFULL</h1>
      <h4> Refernce no : {refernce_id} </h4>
    </div>
  );
};

export default PaymentSuccess;
