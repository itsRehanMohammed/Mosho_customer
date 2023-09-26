import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <Link className="link" to={`/menu/${item.product_name}`}>
          <div className="card-img">
            <img className="img" src={item.image} alt=""></img>
          </div>

          <div className="card-name">
            <p>{item.product_name}</p>
          </div>
        </Link>
        <div className="bottom">
          <div className="card_price">
            <p
              style={{
                paddingLeft: "6px",
                paddingBottom: "6px",
                color: "#000",
              }}
            >
              ₹{item.price} Price{" "}
            </p>
            <p
              style={{
                paddingBottom: "6px",
              }}
            >
              ⭐ 4.3 (245 Delivery Reviews)
            </p>{" "}
            <p
              style={{
                paddingBottom: "6px",
              }}
            >
              📍 Vashi, Navi Mumbai
            </p>{" "}
            {/* <p>
              <img src="/assets/location.svg" alt="location" width="24px" /> <span> Vashi, Navi Mumbai</span>{" "}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
