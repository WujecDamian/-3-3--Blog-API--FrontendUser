import { Link } from "react-router-dom";

const PostComponent = ({ post }) => {
  const contentSnippet = post.content.toString().slice(0, 50);

  return (
    <Link to={`/post/${post.id}`}>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{contentSnippet}...</p>
        <span>{post.date}</span>
      </div>
    </Link>
  );
};

export default PostComponent;
