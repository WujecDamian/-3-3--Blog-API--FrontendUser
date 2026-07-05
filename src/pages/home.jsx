import { useEffect, useState } from "react";
import PostComponent from "../features/Posts/post/PostComponent";
import styles from "./home.module.css";

export default function Home() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPosts(result.posts);
      } catch (error) {
        setError("Error fetching posts: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  console.log(posts);

  return (
    <>
      <main>
        <h1>Hello</h1>
        <h2>I'm a homepage</h2>
        <section className={styles.posts}>
          {posts.map((post) => (
            <PostComponent post={post} key={post.id} />
          ))}
        </section>
      </main>
    </>
  );
}
