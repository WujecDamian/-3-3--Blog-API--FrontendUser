import { useState } from "react";
import styles from "./NewComment.module.css";

const NewComment = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newUserData = {
      content,
    };
    console.log(newUserData);
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newUserData),
    })
      .then((response) => response.json())
      .then(() => {
        setContent("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
