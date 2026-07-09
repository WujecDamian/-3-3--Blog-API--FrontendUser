import { useState } from "react";
import styles from "./NewComment.module.css";
import { User } from "../../../contexts/userContext";

const NewComment = ({ postId }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = User();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(postId);
    console.log(token);

    const commentData = {
      content,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(commentData),
        },
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      setContent("");
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="content"
        id="content"
        value={content}
        onChange={(e) => handleChange(e)}
      />

      <input type="submit" value="Add" />
    </form>
  );
};

export default NewComment;
