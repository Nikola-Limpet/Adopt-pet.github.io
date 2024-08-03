// Code for the App component
// Import the React and ReactDOM libraries
// this is just a simple example of how to create a component using React.createElement
// and then render it to the DOM using ReactDOM.createRoot
import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";  // import the Pet component


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Chimmie" animal="Dog" breed="Pomeranian" />
      <Pet name="Lolen" animal="Lion" breed="African" />
      <Pet name="Poki" animal="Donkey" breed="American" />
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App /> );


