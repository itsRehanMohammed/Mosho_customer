import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="primary-color">About Us</h1>
      <div className="about-wrapper">
        <div className="dedicated-trainers">
          <div className="img">
            <img
              src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph"
              alt=""
            />
          </div>
          <div className="content">
            <p>
              At The Mosho, we are passionate about serving delicious food that
              brings people together. Our chefs use only the freshest and
              highest-quality ingredients to create meals that satisfy all your
              cravings.
            </p>
            <p>
              We believe that food should be more than just fuel for the body -
              it should be a source of joy and connection. That's why we offer a
              range of dishes to suit all tastes and dietary needs, from classic
              comfort foods to innovative vegan and gluten-free options.
            </p>
            <p>
              Our commitment to excellence extends beyond our menu. We are
              dedicated to providing exceptional customer service and creating a
              welcoming atmosphere where everyone feels at home.
            </p>
            <p>
              Whether you're dining in or ordering takeout, we want to make your
              experience with us unforgettable. Thank you for choosing The Mosho
              - we can't wait to serve you!
            </p>
          </div>
        </div>
        <div className="offers">
          <div className="img">
            <img
              src="https://img.freepik.com/free-vector/online-education-language-courses-apps-group-training-personal-tutors-offers-ads-flat-smartphones-screens-set_1284-33095.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph"
              alt=""
            />
          </div>
          <div className="content">
            <h1>Our Vision</h1>
            <p>
              {" "}
              Our vision at MOSHO is to become a leading fast-food brand in
              Mumbai and India, known for our unique and authentic flavors and
              variety of momos and shawarmas.
            </p>
            <p>
              We aim to expand our reach through our franchises and offer our
              food to more people across the country.
            </p>
            <p>
              We aim to be the best food brand in town, and through our
              franchises, expand our reach to more cities in India.We envision
              becoming the go-to destination for all food lovers, providing them
              with a delightful and finger-licking experience every time they
              choose MOSHO.
            </p>
            <p>
              We are committed to maintaining the quality and authenticity of
              our food, while also being innovative and creative in our
              offerings.
            </p>
            <p>
              We strive to keep up with the trends and demands of our customers,
              and continue to be a popular and trusted brand in the food
              industry.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="img">
            <img
              src="https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7295.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph"
              alt=""
            />
          </div>
          <div className="content">
            <h1>Our Mission</h1>

            <p>
              Our mission at MOSHO is to bring the unique and traditional taste
              of Darjeeling to Mumbai and beyond, by offering a wide variety of
              veg and non-veg momos and shawarmas that are authentic, delicious
              and finger-licking.
            </p>
            <p>
              We are committed to maintaining high standards of quality and
              authenticity, offering lots of variety, including platters of
              steam and fry, tandoori and kurkure momos.
            </p>
            <p>
              We aim to be the best food brand in town, and through our
              franchises, expand our reach to more cities in India.
            </p>
            <p>
              We are dedicated to delivering our food quickly and efficiently,
              while also being available on online platforms for easy access to
              our customers.
            </p>
            <p>
              Our goal is to provide our customers with the best food and
              service, and through this, achieve long-term growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
