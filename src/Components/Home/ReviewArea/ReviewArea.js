import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewArea = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://stark-cove-09835.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="container pb-3">
            <h6 className="text-center mt-5">What our Clients Says</h6>
            <h1 className="text-center mb-5">Client Testimonials</h1>
            <div className="row container">
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ReviewArea;