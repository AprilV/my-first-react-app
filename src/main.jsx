import React from "react";
import ReactDOM from "react-dom/client";
import BlogPost from "./BlogPost";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogPost title="Standalone Blog Post" text="This is a standalone blog post for testing purposes." />
  </React.StrictMode>
);
