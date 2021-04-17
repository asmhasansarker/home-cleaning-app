import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectOne from '../../../images/projectOne.jpeg'
import projectTwo from '../../../images/projectTwo.jpeg'
import projectThree from '../../../images/projectThree.jpeg'
import projectFour from '../../../images/projectFour.jpeg'
import projectFive from '../../../images/projectFive.jpeg'
import projectSix from '../../../images/projectSix.jpeg'
import projectSeven from '../../../images/projectSeven.jpeg'
import './Projects.css'

const Projects = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="container-fluid custom-project py-5 mt-3">
    <div className="container py-3">
        <h5 className="text-center text-white ">Our Latest</h5>
      <h1 className="text-center text-white mb-5">Cleaning Projects</h1>
      <Slider {...settings}>
     
        <div>
          <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectOne} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectTwo} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectThree} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectFour} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectFive} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectSix} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectSeven} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectTwo} alt=""/>
        </div>
        <div>
        <img style={{height:"250px", width:"350px",marginLeft:"15px",marginRight:"15px"}} src={projectThree} alt=""/>
        </div>
        

      </Slider>

      <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-success px-4 py-2">View Projects</button>
      </div>
    </div>
    </div>
  );
};

export default Projects;
