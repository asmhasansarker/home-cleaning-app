import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const ManageSingleCard = ({ service, handleDeleteService }) => {
  console.log(service);
  const { serviceTitle, serviceCharge, _id } = service;

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/services")
      .then((res) => res.json())
      
  }, [service]);

  return (
    <>
      <div className="col-md-3 mt-2">{serviceTitle}</div>
      <div className="col-md-3 mt-2">${serviceCharge}</div>
      <div className="col-md-3 mt-2">
        <select className="form-select w-75 " aria-label="Default select example">
          <option selected value="1">Pending</option>
          <option value="2">On going</option>
          <option value="3">Done</option>
        </select>
      </div>
      <div className="col-md-3 mt-2">
        <button className="btn btn-danger" onClick={() => handleDeleteService(_id)}><FontAwesomeIcon className="mx-2" icon={faTrashAlt} /></button>
      </div>
    </>
  );
};

export default ManageSingleCard;
