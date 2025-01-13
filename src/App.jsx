import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world!</h1>
      <p>This is a non react site</p>
    </div>
  );
}

