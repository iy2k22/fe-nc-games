export const CommentCard = ({ author, body, created_at, votes }) => (
  <div className="commentCard">
    <h2>{author}</h2>
    <p>{body}</p>
    <h3>🕒 created at {created_at}</h3>
    <h3>👍 {votes}</h3>
  </div>
);
