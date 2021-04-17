import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ManageSingleCard from "../ManageSingleCard/ManageSingleCard";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const handleDeleteService = (id) => {
    
    fetch(`https://stark-cove-09835.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(allServices);
  return (
    <div className="container row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 jumbotron">
        <div className="">
          <h4>Manage service</h4>
          <div className="row">
            <div className="col-md-3">Title</div>
            <div className="col-md-3">Charge</div>
            <div className="col-md-3">Status</div>
            <div className="col-md-3">Action</div>
          </div>
          <hr/>
          <div className="row mt-2">
            {allServices.map((service) => (
              <ManageSingleCard
                key={service._id}
                service={service}
                handleDeleteService={handleDeleteService}
              ></ManageSingleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
