import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@mui/icons-material/SearchOutlined";
import data from "../../data/popularFoods.json";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Cart from "../Cart/Cart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Fade from "@mui/material/Fade";
import { ToastContainer, toast } from "react-toastify";
import { Avatar, Badge } from "@mui/material";
const Navbar = ({ user, role, MenuDB, state, dispatch, cart }) => {
  const [openCart, setopenCart] = useState(false);
  const toggleCart = () => {
    setopenCart(!openCart);
  };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openMenu, setopenMenu] = useState(false);
  const [search, setsearch] = useState("");
  const [searchResults, setsearchResults] = useState(false);
  const [modal, setModal] = useState(false);

  const showResults = (e) => {
    setsearch(e.target.value);
    setsearchResults(true);
  };
  const logoutModal = () => {
    setAnchorEl(null);
    setModal(true);
  };
  const logoutHandeler = async () => {
    setModal(false);
    const response = await fetch("https://mosho.onrender.com/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    sessionStorage.removeItem("cart");
    const data = await response.json();
    toast.success(data.status);
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="container-nav">
        <nav className="navbar">
          <div className="left">
            <Link to="/">
              <img className="brand" src="./assets/logo.png"></img>
              The MOSHO
            </Link>
          </div>

          <div className={`${openMenu ? "searchBar display_none" : "searchBar"} `}>
            <input type="text" placeholder="search..." className="searchInput" onChange={(e) => showResults(e)} />
            <span className="searchIcon">
              {" "}
              <Search />
            </span>
          </div>
          {searchResults && (
            <div className={localStorage.getItem("token") ? "search_result_wrapper_login" : "search_result_wrapper"}>
              <div className="results">
                {MenuDB.filter((item) => {
                  return item.product_name.toLowerCase().includes(search.toLowerCase());
                }).map((item) => {
                  if (search.length > 0) {
                    return (
                      <Link to={`/menu/${item.product_name}`} key={item.product_name} onClick={() => setsearchResults(false)}>
                        <div className="search_result">
                          <img src={item.image} alt="" />
                          <h4>{item.product_name.slice(0, 20)}...</h4>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
              {search.length < 1 && setsearchResults(false)}
              <div className="result_empty">
                <h4 style={{ marginTop: "20px", marginLeft: "60px" }}> No Results Found... </h4>
              </div>
            </div>
          )}

          <div className={`${openMenu ? " active right" : "right close"} `}>
            <ul className="navbar-ul">
              <li onClick={() => setopenMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/menu">Menu</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/contact">Contact</Link>
              </li>

              <div className={openMenu ? "close" : "cart"} onClick={toggleCart}>
                <Badge id="cart" badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </div>
              {!localStorage.getItem("token") ? (
                <div className="login_signup_wrapper">
                  <div className="login" onClick={() => setopenMenu(false)}>
                    <Link to="/login"> Login </Link>
                  </div>
                  <div className="signup" onClick={() => setopenMenu(false)}>
                    <Link to="/signup"> Sign Up </Link>
                  </div>
                </div>
              ) : (
                <div className="after_login">
                  <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                    <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#ff492f" }}>
                      {(localStorage.getItem("username") && localStorage.getItem("username").slice(0, 1)) || "U"}
                      {}
                    </Avatar>
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <Link to={"/orders"}>
                      <MenuItem sx={{ color: "black" }} onClick={handleClose}>
                        {" "}
                        Orders{" "}
                      </MenuItem>
                    </Link>

                    <MenuItem onClick={logoutModal}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </ul>
          </div>
          <div className={openMenu ? "close" : " cart-responsive"} onClick={toggleCart}>
            <Badge id="cart" badgeContent={cart.length} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </nav>
        <div className="menu">
          {openMenu ? (
            <span className="close-menu" onClick={() => setopenMenu(!openMenu)}>
              <CloseIcon />
            </span>
          ) : (
            <span className="open-menu" onClick={() => setopenMenu(!openMenu)}>
              <MenuIcon />
            </span>
          )}
        </div>
      </div>
      <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
        <p>Are You Sure You want to logout?</p>
        <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
          Logout
        </button>
        <button onClick={() => setModal(false)}>Cancel</button>
      </div>
      {/* {openSaved && <Saved toggleSaved={toggleSaved} saved={saved} setsaved={setsaved} />} */}
      {openCart && <Cart toggleCart={toggleCart} user={user} MenuDB={MenuDB} state={state} dispatch={dispatch} cart={cart} />}
    </>
  );
};

export default Navbar;
