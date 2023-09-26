import React from "react";
import { Link } from "react-router-dom";
import "./popular.css";
// import Courses from "../../data/courses";
import Card from "../Card/Card";

const RecentlyIntroduce = () => {
  return (
    <div className="recently">
      <div className="recently-head">
        <h2>Recently Introduce Items</h2>
        <div className="see-all-items">
          <Link to={"menu"}>See All</Link>
        </div>
      </div>
      {/* <div className="recently-courses_wrapper">
        {Courses.map((item) => {
          return item.isNew && <Card key={item.course_name} item={item} />;
        })}
      </div> */}
    </div>
  );
};

export default RecentlyIntroduce;
