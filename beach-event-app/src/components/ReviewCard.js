// src/components/ReviewCard.js
import React from "react";
import { Card } from "react-bootstrap";
import "./ReviewCard.css";

const ReviewCard = ({ name, comment, rating }) => {
  return (
    <Card className="review-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>"{comment}"</Card.Text>
        <div className="rating">
          {"⭐".repeat(rating)}{" "}
          <span className="rating-value">({rating}/5)</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
