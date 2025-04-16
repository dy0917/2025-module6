import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero";
import "./App.css";

import { City } from "./components/DemoComponent";
import Greeting from "./components/Greeting";
import ComplexComment from "./components/ComplexComponent";
import UserInfo from "./components/UserInfo";
import MoviesList from "./components/Movelist";
import Child from "./components/ChildComponent";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";

function App() {
  console.log("parent update");
  return (
    <>
      <MoviesList></MoviesList>
      {/* <BirthdayTranslator></BirthdayTranslator>
      <Weather></Weather> */}
    </>
  );
}

export default App;
