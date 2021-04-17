import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const NewAdmin = () => {

  const [newAdmin, setNewAdmin] = useState({})

  const handleBlur = (e) =>{
    setNewAdmin({
      [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(newAdmin);

    fetch("https://stark-cove-09835.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // console.log(orderDetails);
    alert("Successfully added a new admin")
  }

  return (
    <div className="container row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 jumbotron">
        <div>
          <h1>Enter new admin email</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onBlur={handleBlur} name="adminEmail" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              
            </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAdmin;
