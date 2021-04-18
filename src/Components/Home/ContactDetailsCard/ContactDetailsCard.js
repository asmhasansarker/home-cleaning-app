import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { faFacebookF, faInstagram, faGooglePlusG, faMapMarker } from '@fortawesome/free-brands-svg-icons';
import "./ContactDetailsCard.css";

const ContactDetailsCard = (props) => {
  const { icon, title, describe } = props.contact;
  return (
    <div className="">
      <div className="d-flex justify-content-between custom-contact-details">
        <div className="col-md-2">
          <FontAwesomeIcon className="icon" icon={icon} />
        </div>
        <div className="col-md-10">
          <h6>{title}</h6>
          <p className="text-muted">{describe}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsCard;
