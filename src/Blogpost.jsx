import React from "react";
import "./BlogPost.css";
import CardMedia from "@mui/material/CardMedia";
import img1 from "./images/img1.jpg"; // Default image

function BlogPost({ title, author, date, content, image }) {
  return (
    <div className="blogpost-wrapper">
      <div className="blogpost">
        {/* Use CardMedia for the image */}
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={image || img1} // Use the passed image or the default img1
          style={{ borderRadius: "8px", marginBottom: "20px" }}
        />
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
          For more project management tips, visit{" "}
          <a
            href="https://www.pmi.org/certifications/project-management-pmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            PMI's official PMP page
          </a>.
        </footer>
      </div>
    </div>
  );
}



export default BlogPost;
