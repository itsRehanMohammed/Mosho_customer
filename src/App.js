import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login and SignUp/Login";
import Signup from "./components/Login and SignUp/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Foods from "./data/popularFoods.json";

import { cartReducer } from "../src/reducers/cartReducer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useReducer, useState } from "react";
import Menu from "./Pages/Menu";
import Item from "./components/FoodItems/Item";
import Orders from "./components/Orders/Orders";
import PaymentSuccess from "./components/Orders/PaymentSuccess";

function App() {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const [MenuDB, setMenuDB] = useState([]);
  useEffect(() => {
    // setSearchParams({});
    const fetchSettings = async () => {
      const response = await fetch(
        "https://mosho.onrender.com/api/getsettings"
      );
      const data = await response.json();

      localStorage.setItem("restaurantAvailable", data.restaurantAvailable);
    };

    const fetchProducts = async () => {
      const response = await fetch("https://mosho.onrender.com/api/products");
      const data = await response.json();
      setMenuDB(data);
    };
    fetchProducts();
    fetchSettings();
  }, []);
  const userData = async () => {
    const response = await fetch("https://mosho.onrender.com/api/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await response.json();
    localStorage.setItem("username", data.name);
    localStorage.setItem("role", data.role);
    localStorage.setItem("email", data.email);
    // setRole(data.role);
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  // console.log(JSON.parse(localStorage.getItem("cart")).cart);

  // Get cart data from sessionStorage or an empty array if it's not available
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || { cart: [] };

  // Access the 'cart' property from cartData
  const cart = cartData.cart;
  return (
    <div className="App">
      <Router>
        <Navbar MenuDB={MenuDB} state={state} dispatch={dispatch} cart={cart} />
        <ScrollToTop />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home MenuDB={MenuDB} />} />
          <Route path="/menu" element={<Menu MenuDB={MenuDB} />} />
          <Route
            path="/menu/:foodID"
            element={
              <div>
                {MenuDB.map((item) => (
                  <Item
                    key={item._id}
                    item={item}
                    state={state}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login userData={userData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/paymentsuccess"
            element={<PaymentSuccess cart={cart} />}
          />
        </Routes>
        {/* {courses_data.map((item) => {
          return (
            <div>
              {" "}
              <img src={item.img} alt="" />{" "}
            </div>
          );
        })} */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
