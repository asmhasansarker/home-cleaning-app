import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SimpleCardForm = ({handlePayment,charge}) => {
  
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
        setPaymentSuccess(paymentMethod.id)
        setPaymentError(null)
        handlePayment(paymentMethod.id)
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-50">
        <CardElement />
        </div>
       

        <div className="row mt-5">
          <div className="col-md-4">
          <p className="mt-2">Your Service charged will be <span className="font-weight-bold">${charge} </span></p>
          </div>
          <div className="col-md-8">
              <button type="submit" disabled={!stripe} className="btn btn-primary px-5 py-2">
                  Pay
              </button>
          </div>
        </div>
      </form>
      {
          paymentError && <p style={{color:"red"}}>{paymentError}</p>
      }
         {
          paymentSuccess && <p style={{color:"green"}}>Your payment was successful</p>
      }
    </div>
  );
};

export default SimpleCardForm;
