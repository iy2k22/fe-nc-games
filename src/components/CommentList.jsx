import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import { Loading } from "./Loading";
import { CommentCard } from "./CommentCard";

const CommentList = () => {
  const { review_id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setLoading(true);
    getComments(review_id).then(({ comments }) => {
      setLoading(false);
      setComments(comments);
    });
  }, [review_id]);
  if (isLoading) return <Loading />;
  else if (comments.length > 0)
    return (
      <div className="comments">
        <h1>Comments ({comments.length})</h1>
        <ul className="commentList">
          {comments.map((comment) => (
            <li>
              <CommentCard
                author={comment.author}
                body={comment.body}
                created_at={comment.created_at}
                votes={comment.votes}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  else return <h1>No comments found</h1>;
};

export default CommentList;
