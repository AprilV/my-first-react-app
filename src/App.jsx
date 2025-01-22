import React from "react";
import Greeting from "./Greeting";
import BlogPost from "./Blogpost";
import counter from "./counter"

function App() {
  return (
    <div>
      {/* Display the Greeting component */}
      <Greeting name="April" />

      {/* Display multiple BlogPost components */}
      <BlogPost title="Change" text="Change is the only constant in life, and adapting to it is a skill that shapes our resilience. Whether it's navigating new technologies, embracing career shifts, or overcoming personal challenges, the ability to adapt allows us to grow and thrive. While change often feels uncomfortable, it also brings opportunities for learning and self-discovery. By staying open-minded and focusing on what we can control, we can turn uncertainty into a stepping stone for progress." />
      <BlogPost title="Another Day" text="minus 1" />
      <BlogPost title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

 />
  <counter/>
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
