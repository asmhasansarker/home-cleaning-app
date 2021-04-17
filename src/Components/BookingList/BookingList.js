import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
// import SingleBookCard from "../SingleBookCard/SingleBookCard";

const BookingList = () => {
  const [user] = useContext(UserContext);
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/orders?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [allBookings]);

  return (
    <div className="container row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 jumbotron">
        {/* <div className="row py-4  mx-0 w-100" >
            <h3 className="col-md-3 bg-primary text-center mr-3  py-4 rounded">Title</h3>
            <h3 className="col-md-3 bg-success text-center mx-3 py-4 rounded">Time</h3>
            <h3 className="col-md-3 bg-danger  text-center ml-3  py-4 rounded" >Status</h3>
          </div>
          <div>
          {allBookings.map((book) => (
            <SingleBookCard book={book}></SingleBookCard>
          ))}
          </div> */}
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            
            {
              allBookings.map(book => <tr>
                <td>{book.serviceTitle}</td>
                <td>{book.orderTime}</td>
                <td>Pending</td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
