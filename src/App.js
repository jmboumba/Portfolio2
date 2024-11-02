import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './components/Header';

function App() {
  const [bgColor, setBgColor] = useState("gray");

  // Function to toggle background color
  const handleClick = () => {
    setBgColor(prevColor => (prevColor === "gray" ? "#fd5d5d" : "#fd5d5d"));
  };
  return (
    <>
      <Header />
    </>
  );
}

export default App;
