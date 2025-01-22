import React from "react";
import ReactDOM from "react-dom/client";
import BlogPost from "./BlogPost";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogPost
      title="Mastering Project Management: Key Tips for Success"
      author="April Sykes"
      date="January 22, 2025"
      content="Project management is both an art and a science. To excel, project managers must combine technical skills with leadership and communication expertise. The PMP certification offered by PMI.org is a vital credential for professionals aiming to validate their project management expertise. Staying organized, adapting to changes, and maintaining clear communication with stakeholders are key to success. Explore more about PMP certification and tools at PMI.org."
    />
  </React.StrictMode>
);
