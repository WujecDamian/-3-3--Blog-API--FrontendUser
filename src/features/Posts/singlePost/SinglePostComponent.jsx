const SinglePostComponent = ({ post }) => {
  return (
    <article className="post">
      <h1>{post.title}</h1>
      <section className="post__content">{post.content}</section>
      <span>{post.date}</span>
    </article>
  );
};

export default SinglePostComponent;
