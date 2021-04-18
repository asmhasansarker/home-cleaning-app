import React from "react";
import "./ReviewCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = (props) => {
  const { reviewerName,  reviewDetails } = props.review;
  return (
    <div className="col-md-4 custom-review">

        <div className="card review-content border-0 shadow" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text"><FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />{reviewDetails}<FontAwesomeIcon icon={faQuoteRight} className="ml-3" />
            </p>
          </div>
        </div>
        <div className="small-square shadow"></div>

      <div className="review-name ml-5 mt-4">
        <h5>{reviewerName}</h5>
      </div>
    </div>
    
  );
};

export default ReviewCard;



