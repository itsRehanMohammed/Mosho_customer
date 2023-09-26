import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
// import grilled_chicken from "/assets/grilled-chicken.jpg";
// import biryani from "/assets/biryani.jpeg";
// import chicken_curry from "/assets/chicken-curry.jpg";
import SlideButtons from "./SlideButtons";

const Slider = () => {
  const [imgIndex, setimgIndex] = useState(0);
  const allSlides = [
    {
      id: 1,
      img: "/assets/grilled-chicken.jpg",
      head: "Grilled Chicken",
      desp: "Indulge in the juicy and tender grilled chicken perfection.",
      color: "#cd9667",
    },
    {
      id: 2,
      img: "/assets/biryani.jpeg",
      head: "Chicken Dum Biryani",
      desp: "Experience the aromatic delight of our authentic chicken dum biryani.",
      color: "#cfa9c9",
    },
    {
      id: 3,
      img: "/assets/chicken-curry.jpg",
      head: "Chicken Curry",
      desp: "Savor the rich flavors of our mouthwatering chicken curry.",
      color: "#e3d9d7",
    },
  ];
  // useEffect(() => {
  setTimeout(() => {
    setimgIndex((imgIndex) =>
      imgIndex < allSlides.length - 1 ? imgIndex + 1 : 0
    );
  }, 4000);
  // }, []);

  const sliderStyle = {
    backgroundColor: `${allSlides[imgIndex].color}`,
  };
  const goToSlide = (itemIndex) => {
    setimgIndex(itemIndex);
  };

  return (
    <>
      {/* <Banner /> */}
      <div className="slide-container">
        <div className="slider">
          {/* <SlideButtons allSlides={allSlides} imgIndex={imgIndex} setimgIndex={setimgIndex} /> */}
          <div className="slides">
            {allSlides.map((item) => {
              return (
                <div className="slide-wrapper" key={item.id}>
                  <div className="slider-img">
                    <img
                      src={allSlides[imgIndex].img}
                      alt={allSlides[imgIndex].head}
                    />
                  </div>
                  <div className="slider-info">
                    <h1>{allSlides[imgIndex].head}</h1>
                    <p>{allSlides[imgIndex].desp}</p>
                    {allSlides[imgIndex].desp1 && (
                      <p>{allSlides[imgIndex].desp1}</p>
                    )}
                    <Link to="menu">
                      <button> Get it Now</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dots-container">
          {allSlides.map((item, itemIndex) => {
            return (
              <div
                key={item.id}
                className={imgIndex === itemIndex ? "dot active-dot" : "dot"}
                onClick={() => goToSlide(itemIndex)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
