import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

const ReviewList = ({ category }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then(({ reviews }) => {
      console.log(reviews);
      setReviews(category ? reviews.filter((review) => review.category === category) : reviews);
    });
  }, [category]);
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <ReviewCard
            title={review.title}
            owner={review.owner}
            created_at={review.created_at}
            votes={review.votes}
            id={review.review_id}
            review_img_url={review.review_img_url}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
