import React, { useContext } from "react";
import { UserContext } from "../../App";
import DeveloperInfo from "../DeveloperInfo/DeveloperInfo";
import Sidebar from "../Sidebar/Sidebar";
import './Admin.css'

const Admin = () => {
  const [user] = useContext(UserContext);
  return (
    <div className="container row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 jumbotron">
      <div className="container">
      <h1 className="text-center py-3 adminpanel text-white">Admin Panel</h1>
      <div className="card bg-light mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header text-center font-weight-bold">Admin Info</div>
        <div className="card-body row">
          <div className="col-md-8">
            <h5 className="card-title">Admin Name : {user.name}</h5>
            <p className="card-text">Email : {user.email}</p>
          </div>
          <div className="col-md-4">
            <img
              src={user.photo}
              className=" rounded-circle img-thumbnail shadow"
              alt=""
            />
          </div>
        </div>
      </div>
      {user.isSignedIn && (
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning mt-3" onClick={() => user.handleSignOut()}>
          Sign Out
        </button>
        </div>
      )}
    </div>
    <DeveloperInfo></DeveloperInfo>
      </div>
    </div>
  );
};

export default Admin;
