import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { faFacebookF, faInstagram, faGooglePlusG, faMapMarker } from '@fortawesome/free-brands-svg-icons';

const ContactDetailsCard = (props) => {
    const {icon, title, describe } = props.contact;
    return (
        <div className="d-flex justify-content-between">
            <div className="col-md-2"><FontAwesomeIcon className="icon" icon={icon} /></div>
            <div className="col-md-10">
                <h6>{title}</h6>
                <p className="text-muted">{describe}</p>
            </div>
        </div>
    );
};

export default ContactDetailsCard;