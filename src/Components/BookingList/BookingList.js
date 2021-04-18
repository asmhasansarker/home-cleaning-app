import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import ManageSingleBooking from "../ManageSingleBooking/ManageSingleBooking";
import Sidebar from "../Sidebar/Sidebar";


const BookingList = () => {
  const [user] = useContext(UserContext);
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/orders?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);



  return (
    <div className="container row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 jumbotron">

        <div className="">
          <h4 className="text-center">Manage All Bookings</h4>
          <hr />
          <div className="row">
            <div className="col-md-6">Title</div>
            
            <div className="col-md-6">Status</div>
          
          </div>
          <hr />
          <div className="row mt-2">
            {allBookings.map((service) => (
              <ManageSingleBooking
                key={service._id}
                service={service}
              ></ManageSingleBooking>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
