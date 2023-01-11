import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleReview } from "../api";
import { Loading } from "./Loading";

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

  if (isLoading) return <Loading />;
  else if (review)
    return (
      <div className="review">
        <h2>{review.title}</h2>
        <h3>by {review.owner}</h3>
        <img src={review.review_img_url} className="reviewImg" />
        <p>{review.review_body}</p>
        <h4>🕒 {review.created_at}</h4>
        <h4>👍 {review.votes}</h4>
        <Link to={`/reviews/${review_id}/comments`}>
          <h4>Comments</h4>
        </Link>
      </div>
    );
  else return <h2>Error: couldn't load review</h2>;
};

export default Review;
