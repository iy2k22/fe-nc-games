import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../api";

const Review = () => {
  const { review_id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [review, setReview] = useState({});
  useEffect(() => {
    setLoading(true);
    getSingleReview(review_id).then(({ review }) => {
      setLoading(false);
      setReview(review);
    });
  }, [review_id]);

  if (isLoading) return <h2>Loading</h2>;
  else if (review)
    return (
      <div className="review">
        <h2>{review.title}</h2>
        <h3>by {review.owner}</h3>
        <img src={review.review_img_url} className="reviewImg" />
        <p>{review.review_body}</p>
        <h4>🕒 {review.created_at}</h4>
        <h4>👍 {review.votes}</h4>
      </div>
    );
  else return <h2>Error: couldn't load review</h2>;
};

export default Review;
