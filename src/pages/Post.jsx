import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import SinglePostComponent from "../features/Posts/singlePost/SinglePostComponent";
import NewComment from "../features/Posts/comment/NewComment";
import Comment from "../features/Posts/comment/Comment";

export default function Post() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/post/${postId}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPost(result.post);
      } catch (error) {
        setError("Error fetching post: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <section className={styles.posts}>
        <SinglePostComponent post={post} key={post.id} />
      </section>
      <section className={styles.comments}>
        <NewComment postId={postId}></NewComment>
        {post.comments.map((comment) => (
          <Comment postId={postId} comment={comment} key={comment.id}></Comment>
        ))}
      </section>
    </main>
  );
}
