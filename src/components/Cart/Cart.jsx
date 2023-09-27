import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Audio } from "react-loader-spinner";
import Modal from "@mui/material/Modal";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./Cart.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "620px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  zIndex: 9999,
};

const Cart = ({ toggleCart, MenuDB, state, dispatch, cart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (localStorage.getItem("restaurantAvailable") === "true") {
      setOpen(true);
    } else {
      toast.error("Sorry! Restaurant is closed now");
    }
  };
  const handleClose = () => setOpen(false);
  function BasicModal() {
    const [address, setAddress] = useState({
      fullAddress: "",
      name: localStorage.getItem("username"),
      locality: "",
      city: "",
      phoneNo: "",
      pincode: "",
      landmark: "",
    });
    const [Spinner, setSpinner] = useState(false);
    const [PreviewAddressModal, setPreviewAddressModal] = useState(
      JSON.parse(localStorage.getItem("address")) ? true : false
    );

    const onChangeHandler = (e) => {
      setAddress({ ...address, [e.target.name]: e.target.value });
    };
    const handleAddress = (event) => {
      event.preventDefault();
      const updatedFullAddress =
        address.locality +
        (address.landmark ? " near " + address.landmark : "") +
        " " +
        address.city +
        "-" +
        address.pincode;
      setAddress({ ...address, fullAddress: updatedFullAddress });

      setSpinner(true);
      localStorage.setItem("address", JSON.stringify(updatedFullAddress));
      localStorage.setItem("contactInfo", JSON.stringify(address));
      setTimeout(() => {
        setSpinner(false);
        setPreviewAddressModal(true);
      }, 2000);
    };

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {Spinner ? (
            <Box
              component="form"
              sx={style}
              noValidate
              autoComplete="off"
              className="modal-content"
            >
              <div className="spinner">
                <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="#ff492f"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
            </Box>
          ) : PreviewAddressModal ? (
            <Box
              component="form"
              sx={style}
              noValidate
              autoComplete="off"
              className="modal-content"
            >
              <div className="address_wrapper">
                <h2>Confirm Details</h2>
                <div className="orders_wrapper">
                  {cart.map((item) => {
                    return (
                      <div className="order_card" key={item.id}>
                        <img src={item.image} alt="" />
                        <h3>
                          {item.qty} {item.name}
                        </h3>
                        <h3>
                          <span> ₹{item.price}</span>
                        </h3>
                      </div>
                    );
                  })}
                </div>
                <h3 style={{ textAlign: "end", marginTop: "14px" }}>
                  Total - ₹{subTotal}
                </h3>
                <div>
                  <p>
                    {JSON.parse(localStorage.getItem("contactInfo")).name} -{" "}
                    {JSON.parse(localStorage.getItem("contactInfo")).phoneNo}
                  </p>
                  <p>{JSON.parse(localStorage.getItem("address"))}</p>
                </div>
                <Button
                  className="save_address_btn"
                  variant="contained"
                  // type="submit"
                  sx={{
                    bgcolor: "#ff492f",
                    "&:hover": {
                      bgcolor: "#ff492f",
                      opacity: 0.9,
                    },
                  }}
                  onClick={paymentHandler}
                >
                  Confirm
                </Button>
              </div>
            </Box>
          ) : (
            <Box
              onSubmit={handleAddress}
              component="form"
              sx={style}
              noValidate
              autoComplete="off"
              className="modal-content"
            >
              <div className="address_wrapper">
                <h2>Enter Your Address</h2>
                <TextField
                  onChange={onChangeHandler}
                  value={address.name}
                  name="name"
                  id="outlined-required"
                  label="Name"
                  placeholder="John doe"
                />
                <TextField
                  onChange={onChangeHandler}
                  value={address.locality}
                  name="locality"
                  required
                  id="outlined-required"
                  label="Locality"
                  placeholder="sector 10, xyz building vashi"
                />
                <TextField
                  onChange={onChangeHandler}
                  value={address.city}
                  name="city"
                  required
                  id="outlined-required"
                  label="City"
                  placeholder="Navi Mumbai"
                />
                <TextField
                  onChange={onChangeHandler}
                  value={address.phoneNo}
                  name="phoneNo"
                  required
                  id="outlined-required"
                  label="Phone no."
                  placeholder="99999 99999"
                  type="number"
                />
                <TextField
                  onChange={onChangeHandler}
                  value={address.pincode}
                  name="pincode"
                  required
                  id="outlined-required"
                  label="Pincode"
                  placeholder="400088"
                  type="number"
                />
                <TextField
                  onChange={onChangeHandler}
                  value={address.landmark}
                  name="landmark"
                  label="Landmark (optional)"
                  placeholder="near railway station"
                />
                <Button
                  className="save_address_btn"
                  variant="contained"
                  type="submit"
                  sx={{
                    bgcolor: "#ff492f",
                    "&:hover": {
                      bgcolor: "#ff492f",
                      opacity: 0.9,
                    },
                  }}
                  // onClick={handleAddress}
                >
                  Next
                </Button>
              </div>
            </Box>
          )}
        </Modal>
      </div>
    );
  }
  let subTotal = 0;

  const paymentHandler = async (item) => {
    const response = await fetch("https://mosho.onrender.com/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: subTotal }),
    });
    const data = await response.json();

    const { order } = data;
    const getKey = await fetch("https://mosho.onrender.com/api/getkey", {
      method: "GET",
    });
    const keyData = await getKey.json();

    const options = {
      key: keyData.key,
      amount: order.amount,
      currency: "INR",
      name: localStorage.getItem("username"),
      description: "Test RazorPay",
      image: "./assets/logo.png",
      order_id: order.id,
      callback_url: "https://mosho.onrender.com/paymentverification",
      prefill: {
        name: localStorage.getItem("username"),
        email: "rehan@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ff492f",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();

    // const success = await fetch("/paymentverification", {
    //   method: "POST",
    // });
    // const successData = await success.json();
  };

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  return (
    <div className="cart-section">
      <div className="cart-header">
        <div className="total-items">
          <h3>
            Your cart has <span>{cart.length} items</span>
          </h3>
        </div>
        <div className="close-cart" onClick={toggleCart}>
          <span>
            <CloseIcon />
          </span>
        </div>
      </div>
      {cart.length > 0 ? (
        <div>
          <div className="Cart">
            <div className="cart-items-wrapper">
              {cart.map((item) => {
                subTotal += item.price * item.qty;
                return (
                  <div className="cart-item" key={item._id}>
                    <div className="cart-product-img">
                      <Link to={`/menu/${item.name}`}>
                        {" "}
                        <img src={item.image} alt="" />{" "}
                      </Link>
                    </div>
                    <div className="cart-product-material">
                      <Link to={`/menu/${item.name}`}>
                        <div className="cart-product-name">{item.name}</div>{" "}
                      </Link>
                      <div className="cart-product-price">₹ {item.price}</div>
                      <div className="cart-remove-and-quantity">
                        <div className="cart-product-quantity">
                          <span
                            className="decrease-cart-quantity"
                            onClick={() => changeQty(item.id, item.qty - 1)}
                          >
                            <RemoveIcon />
                          </span>
                          <p className="cart-product-quantity-value">
                            {" "}
                            {item.qty}
                          </p>
                          <span
                            className="increase-cart-quantity"
                            onClick={() => changeQty(item.id, item.qty + 1)}
                          >
                            <AddIcon />
                          </span>
                        </div>
                        <div
                          className="cart-product-remove"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_TO_CART",
                              payload: item,
                            })
                          }
                        >
                          <span>
                            {" "}
                            <DeleteIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-footer">
            <div className="subtotal">
              <h3>
                Sub-total : <span>₹{subTotal}</span>
              </h3>
            </div>
            <div className="check-out" onClick={handleOpen}>
              <h4> Checkout </h4>
              <span>
                <ShoppingCartCheckoutIcon />
              </span>
            </div>

            <BasicModal />
          </div>
        </div>
      ) : (
        <div className="cart-empty-section">
          <div className="cart-empty">
            {" "}
            <div className="cart-empty-display">
              <span>
                {" "}
                <RemoveShoppingCartIcon className="cart-empty-icon" />{" "}
              </span>
              <h2>Cart is Empty ☹</h2>
            </div>
            <span className="redirect-to-store" onClick={toggleCart}>
              <Link to="/menu"> Continue Shopping</Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
