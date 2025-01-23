import React from "react";
import BlogPost from "./BlogPost";

import Typography from "@mui/material/Typography"; // Import Typography from Material-UI

function App() {
  return (
    <div>
      {/* Add a fancy heading */}
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography
          variant="h2"
          component="h1"
          style={{
            fontFamily: "Cursive, Arial",
            color: "#3498db",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            animation: "fadeIn 2s",
          }}
        >
          April's Blog
        </Typography>
      </header>

      {/* BlogPost Component */}
      <BlogPost
        title="Mastering Project Management"
        author="April Sykes"
        date="January 22, 2025"
        content="Project management is both an art and a science. To excel, project managers must combine technical skills with leadership and communication expertise. The PMP certification offered by PMI.org is a vital credential for professionals aiming to validate their project management expertise. Staying organized, adapting to changes, and maintaining clear communication with stakeholders are key to success. Explore more about PMP certification and tools at PMI.org."
      />

      <BlogPost
        title="The Gold Standard of Project Management"
        author="April Sykes"
        date="January 23, 2025"
        content="The PMP certification sets the gold standard for project management professionals across industries. It not only validates your expertise in managing projects efficiently but also equips you with the tools to handle complex challenges. Whether it's mastering Agile techniques, stakeholder communication, or risk management, the PMP program empowers professionals to excel in a dynamic work environment. By earning this credential, you demonstrate your commitment to excellence and open doors to greater career opportunities and professional growth."
      />
    </div>
  );
}

export default App;






















/*function App() {
  return (
    <>
      <BlogPost title="1/11/2025" />
      text=
      <BlogPost title="1/12/2025" />
      <BlogPost title="1/13/2025" />
      <BlogPost title="1/14/2025" />
    </>
  );               
} */

/*function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Count: {count}</p> {/* Render the state variable}
      <button>Click Me</button>
    </div>
  );
}
*/
