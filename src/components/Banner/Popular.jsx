import React from "react";
import { Link } from "react-router-dom";
import "./popular.css";
import data from "../../data/popularFoods.json";
import Card from "../Card/Card";
const Popular = ({ MenuDB }) => {
  return (
    <div className="popular">
      <div className="popular-head">
        <h2>Top Picks</h2>
        <div className="see-all-items">
          <Link to={"menu"}>See All</Link>
        </div>
      </div>
      <div className="popular-items_wrapper">
        {MenuDB.map((item) => {
          return item.isPopularproduct && <Card key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
