// src/pages/ReviewsPage.js
import React from "react";
import ReviewCard from "../components/ReviewCard";

const sampleReviews = [
  { name: "Varsha", comment: "Amazing beach vibes!", rating: 5 },
  { name: "Shruthi", comment: "Loved the food & music!", rating: 4 },
  { name: "Prithvi", comment: "Best event ever!", rating: 5 },
  { name: "Varnita", comment: "I will visit again!", rating: 4 },
  { name: "Chaitra", comment: "The feeling was amazing!", rating: 3 },
];

const ReviewsPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Event Reviews</h2>
      <div className="row">
        {sampleReviews.map((review, idx) => (
          <div key={idx} className="col-md-4">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
