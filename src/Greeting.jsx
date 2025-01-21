
import React, { useState } from 'react'; // Importing useState

function Greeting(props) {
  // State to manage the greeting message
  const [message, setMessage] = useState("Hello Trekkers!!!");

  // Function to handle hiding the greeting
  const hideGreeting = () => {
    setMessage(""); // Set the message to an empty string to hide it
  };

  return (
    <div>
      <h1>{message} {props.name}!</h1> {/* Display the greeting message */}
      <button onClick={hideGreeting}>Hide Greeting</button> {/* Button to hide message */}
    </div>
  );
}

export default Greeting;
