import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const review = {
      reviewerName: data.reviewerName,
      reviewDetails: data.reviewDetails
    };

    fetch(`https://stark-cove-09835.herokuapp.com/addReview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    }).then((res) => {
      console.log("server side response");
    });
  };
  return (
    <div className="container row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 jumbotron">
        <div className="container">
          <h1 className="text-center">Your Review</h1>
          <hr/>

          <form onSubmit={handleSubmit(onSubmit)}>
          <input
              className="form-control"
              ref={register}
              name="reviewerName"
              placeholder="Enter your name"
            />
           
            <br />

            <textarea
              className="form-control"
              ref={register}
              name="reviewDetails"
              id=""
              cols="100"
              rows="10"
              placeholder="Write your comment...."
            ></textarea>

            <br />

            <input className="btn btn-success" type="submit" value="Give a review" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
