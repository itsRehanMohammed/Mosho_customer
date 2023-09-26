import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./filter.css";

const Filters = () => {
  const sortHandler = (e) => {
    e.preventDefault();
    setSearchParams({ sort: e.target.name });
  };
  const sortByPriceHandler = (e) => {
    e.preventDefault();
    setSearchParams({ price: e.target.name });
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [filterMobile, setfilterMobile] = useState(false);
  const filterByCategory = (e) => {
    e.preventDefault();
    setSearchParams({ category: e.target.name.toLowerCase() });
  };

  const resetFilters = (e) => {
    e.preventDefault();
    setSearchParams({});
  };

  return (
    <>
      <div className="filter">
        <div className="clear-all-filters">
          <input className="clear-all" type="button" value="Clear All Filters" onClick={resetFilters} />
        </div>
        <div className="sort">
          <h3> Sort </h3>
          <div className="sorting">
            <input onClick={sortByPriceHandler} className="sort-elements" type="button" name="low" value={"Price: Low to High"} id="low" />
            <input onClick={sortByPriceHandler} className="sort-elements" type="button" name="high" value={"Price: High to Low"} id="high" />
            {/* <input onClick={sortHandler} className="sort-elements" type="button" name="high" value={"Sort: highest Rating"} id="asc" />
            <input onClick={sortHandler} className="sort-elements" type="button" name="low" value={"Sort: lowest Rating"} id="desc" /> */}
          </div>
        </div>
        <div className="courses-category-container">
          <h3> Filter By Category</h3>
          <div className="courses-category">
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Veg" value={"Veg"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Non Veg" value={"Non-Veg"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Chinese" value={"Chinese"} />
          </div>
        </div>
      </div>
      <div className={filterMobile ? "d_none filter_mobile_btn" : "filter_mobile_btn"}>
        <input type="button" value="Filters" onClick={() => setfilterMobile(true)} />
      </div>
      <div className={filterMobile ? "d_block filter_mobile" : "filter_mobile"}>
        <div className="clear-all-filters">
          <input className="close-filter_btn" type="button" value="Close" onClick={() => setfilterMobile(false)} />
          <input className="clear-all" type="button" value="Clear All Filters" onClick={resetFilters} />
        </div>
        <div className="sort">
          <h3> Sort </h3>
          <div className="sorting">
            <input onClick={sortByPriceHandler} className="sort-elements" type="button" name="low" value={"Price: Low to High"} id="low" />
            <input onClick={sortByPriceHandler} className="sort-elements" type="button" name="high" value={"Price: High to Low"} id="high" />
            {/* <input onClick={sortHandler} className="sort-elements" type="button" name="high" value={"Sort: highest Rating"} id="asc" />
            <input onClick={sortHandler} className="sort-elements" type="button" name="low" value={"Sort: lowest Rating"} id="desc" /> */}
          </div>
        </div>
        <div className="courses-category-container">
          <h2> Filter By Category</h2>
          <div className="courses-category">
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Veg" value={"Veg"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Non Veg" value={"Non-Veg"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Chinese" value={"Chinese"} />
          </div>
        </div>
        {/* <input className="show-filter_result_btn" type="button" value="Show Results" onClick={() => setfilterMobile(false)} /> */}
      </div>
    </>
  );
};

export default Filters;
