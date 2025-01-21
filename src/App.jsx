import React from "react";
import Greeting from "./Greeting";
import BlogPost from "./Blogpost";

function App() {
  return (
    <div>
      {/* Display the Greeting component */}
      <Greeting name="April" />

      {/* Display multiple BlogPost components */}
      <BlogPost title="My First Blog Post" text="This is the content of the first blog post." />
      <BlogPost title="Another Post" text="This is another blog post with different content." />
      <BlogPost title="Default Blog Post" />
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
