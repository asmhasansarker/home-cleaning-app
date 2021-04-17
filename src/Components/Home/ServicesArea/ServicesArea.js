import React, { useEffect, useState } from 'react';
// import houseCleaning from "../../../images/house_cleaning.jpg"
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceArea.css'


const ServicesArea = () => {

    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://stark-cove-09835.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className="container ">
            <h1 className="text-center my-5 text-uppercase">Our Services</h1>
           <div className="row">
            {
                services.map(service => <ServiceCard service={service}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default ServicesArea;

