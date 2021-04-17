import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'

const ServiceCard = (props) => {
  const { serviceTitle, serviceDescription, serviceCharge, serviceKey } = props.service;
  return (
    <div className="col-md-4 custom-design">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top "
          src={`data:image/png;base64,${props.service.image.img}`}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{serviceTitle}</h5>
          <p className="card-text">{serviceDescription}</p>
          <div className="row d-flex justify-content-around">
            <div className="charge">
                <h4>$ {serviceCharge}</h4>
            </div>
            <div className="booking-btn">
              <Link to={`/dashboard/book/${serviceKey}`}>
                <button className="btn btn-primary">Take Service</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
