function BlogPost(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text || "Default text for the blog post."}</p>
    </div>
  );
}

export default BlogPost;
