import React from "react";
import "../style/reviews.css";
import placeholderImage from "../assets/user-placeholder.png";
import { product, assetsBaseUrl, loggedInUser } from "../data";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i <= rating ? "#FFD700" : "none"}
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return stars;
};

const Reviews = () => {
  const handleEdit = (reviewId) => {
    // Handle edit action, e.g., navigate to an edit page
    console.log(`Edit review with ID ${reviewId}`);
  };

  const handleDelete = (reviewId) => {
    // Handle delete action, e.g., delete the review from the state
    console.log(`Delete review with ID ${reviewId}`);
  };

  return (
    <div>
      <div className="container rev-head">
        <h1>Customer reviews</h1>
        <button className="write-review"> Write a review </button>
      </div>

      <div className="feedback">
        {product.reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="user-info">
              <img
                src={
                  review.user === loggedInUser.name
                    ? `${assetsBaseUrl}/${loggedInUser.profileImage}`
                    : placeholderImage
                }
                alt={`Profile of ${review.user}`}
                className="profile-image"
              />
            </div>
            <div className="review-details">
              <p className="user-name">{review.user}</p>
              <div className="rating">{renderStars(review.starRating)}</div>
              <h3 className="headline">{review.headline}</h3>
              <p className="written-review">{review.writtenReview}</p>
              {review.user === loggedInUser.name && (
                <div className="edit-delete-buttons">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
