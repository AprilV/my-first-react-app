import React from "react";
import "./BlogPost.css";

function BlogPost({ title, author, date, content }) {
  return (
    <div className="blogpost-wrapper">
      <div className="blogpost">
        <header className="blogpost-header">
          <h1>{title}</h1>
          <p className="blogpost-meta">
            By <span className="blogpost-author">{author}</span> | <span>{date}</span>
          </p>
        </header>
        <main className="blogpost-content">
          <p>{content}</p>
        </main>
        <footer className="blogpost-footer">
          For more project management tips, visit <a href="https://www.pmi.org/certifications/project-management-pmp" target="_blank" rel="noopener noreferrer">PMI's official PMP page</a>.
        </footer>
      </div>
    </div>
  );
}

export default BlogPost;
