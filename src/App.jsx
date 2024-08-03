// Code for the App component
// Import the React and ReactDOM libraries
// this is just a simple example of how to create a component using React.createElement
// and then render it to the DOM using ReactDOM.createRoot
import React from "react";
import ReactDOM from "react-dom"

function Pet(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name), // name
    React.createElement("h2", {}, props.animal), // animal
    React.createElement("h2", {}, props.breed), // breed,
  ]);
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Chimmie",
      animal: "Dog",
      breed: "Pomeranian",
    }),
    React.createElement(Pet, {
      name: "Lolen",
      animal: "Lion",
      breed: "African",
    }),
    React.createElement(Pet, {
      name: "Poki",
      animal: "Donkey",
      breed: "American",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
