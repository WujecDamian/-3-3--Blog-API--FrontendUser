import { Link } from "react-router-dom";

const PostComponent = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <span>{post.date}</span>
      </div>
    </Link>
  );
};

export default PostComponent;
