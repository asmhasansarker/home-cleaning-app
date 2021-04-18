import React from "react";
import { Carousel } from "react-bootstrap";
import slideOne from "../../../images/slideOne.jpg"
import slideTwo from "../../../images/slideTwo.jpg"
import slideThree from "../../../images/slideThree.jpg"
import './HeaderSlider.css'

const HeaderSlider = () => {
  return (
    <div className="custom-header">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">World No. 1 Cleaning Company</h3>
            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Contact with us to clean your Home</h3>
            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Clients satisfaction is our main Goal</h3>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderSlider;
