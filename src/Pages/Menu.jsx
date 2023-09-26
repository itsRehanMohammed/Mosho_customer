import React, { useEffect, useState } from "react";
import data from "../data/popularFoods.json";
import Card from "../components/Card/Card";
import "./Menu.css";
import Filters from "../components/FoodItems/Filters";
import { useSearchParams } from "react-router-dom";

const Menu = ({ MenuDB }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("sort") === "high" && MenuDB.sort((item1, item2) => item2.rating - item1.rating);
  searchParams.get("sort") === "low" && MenuDB.sort((item1, item2) => item1.rating - item2.rating);
  searchParams.get("price") === "high" && MenuDB.sort((item1, item2) => item2.price - item1.price);
  searchParams.get("price") === "low" && MenuDB.sort((item1, item2) => item1.price - item2.price);

  return (
    <>
      <div className="Menu">
        <h1>
          {" "}
          <span style={{ textTransform: "uppercase" }}> {searchParams.get("category")} </span>
          MENU
        </h1>
        <div className="Menu-page-wrapper">
          <Filters />
          <div className="Menu-wrapper">
            {MenuDB.map((item) => {
              if (searchParams.get("category") === "non veg") {
                return item.category.toLowerCase() === "non veg" && <Card item={item} key={item._id} />;
              }
              if (searchParams.get("category") === "veg") {
                return item.category.toLowerCase() === "veg" && <Card item={item} key={item._id} />;
              }
              if (searchParams.get("category") === "chinese") {
                return item.category.toLowerCase() === "chinese" && <Card item={item} key={item._id} />;
              }

              return <Card item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
