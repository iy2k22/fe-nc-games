import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";
import { Loading } from "./Loading";

const ReviewList = () => {
  const [isLoading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setLoading(true);
    getReviews().then(({ reviews }) => {
      setLoading(false);
      setReviews(reviews);
    });
  }, []);
  return isLoading ? <Loading /> : (
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
