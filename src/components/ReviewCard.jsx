import { Link } from "react-router-dom";

const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      <Link to={`/reviews/${props.id}`}>
        <h1>{props.title}</h1>
        <img src={props.review_img_url} className="reviewImg" />
      </Link>
      <h2>by {props.owner}</h2>
      <h3>🕒 {props.created_at}</h3>
      <h3>👍 {props.votes}</h3>
    </div>
  );
};

export default ReviewCard;
