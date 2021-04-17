import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import PaymentGateway from "../PaymentGateway/PaymentGateway";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router";

const Book = () => {
  const [user] = useContext(UserContext);
  const { serviceKey } = useParams();
  const [myService, setMyService] = useState({});

  let date = new Date();
  let dateString = date.toDateString("dd/MM/yyyy");

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...user,
      ...myService,
      paymentId,
      orderTime: dateString,
    };
    fetch("https://stark-cove-09835.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(orderDetails);
    alert("Successfully Booked an order")
  };

  useEffect(() => {
    fetch(`https://stark-cove-09835.herokuapp.com/service/${serviceKey}`)
      .then((res) => res.json())
      .then((data) => setMyService(data));
  }, []);

  return (
    <div className="container row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <div>
          <div className="row d-flex justify-content-between my-3 py-2">
            <div className="col-md-6 h5">Book</div>
            <div className="col-md-6 h5 text-right">
              <img src={user.photo} alt="" style={{ borderRadius: "50%" }} />
            </div>
          </div>
          <h5>{user.name}</h5>
          <h5>{user.email}</h5>
          <h5>Service Title: </h5>
          <h3>{myService.serviceTitle}</h3>

          <p className="mt-3">Pay with</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <FontAwesomeIcon icon={faCreditCard} /> Creadit Card
            </label>
          </div>
          <div class="form-check form-check-inline mx-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              <FontAwesomeIcon icon={faPaypal} /> Paypal
            </label>
          </div>

          <div className="payment-area mt-5">
            <PaymentGateway
              handlePayment={handlePaymentSuccess}
              charge={myService.serviceCharge}
            ></PaymentGateway>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
