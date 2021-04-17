import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";
// import SplitCardForm from "../SplitCardForm/SplitCardForm";



const stripePromise = loadStripe(
  "pk_test_51Ie7ueKfoxyU7TEu0meKSELD674wxOJq4VMFCFUrtGyUy0hYJ2szWLcBJGdzOXWtaRVoFeTBzfsD5qOlfii1MMUz00hCXUu8ot"
);

const PaymentGateway = ({handlePayment,charge}) => {
  
  return (
    <div>
      
      <Elements stripe={stripePromise}>
        <SimpleCardForm handlePayment={handlePayment} charge={charge}></SimpleCardForm>
      </Elements>
    </div>
  );
};

export default PaymentGateway;
