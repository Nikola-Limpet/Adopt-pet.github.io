// Code for the App component
// Import the React and ReactDOM libraries
// this is just a simple example of how to create a component using React.createElement
// and then render it to the DOM using ReactDOM.createRoot
import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";  // import the Pet component
import SeaerchParams from "./SearchParams";


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SeaerchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App /> );


