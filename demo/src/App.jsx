import { useEffect, useState, useRef } from "react";
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
import ActivityFinder from "./components/ActivityFinder";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";
import PostListReducer from "./components/PostListReducer";
import SubscribeForm from "./components/SubscribeForm";
function Bomb() {
  return <>Bomb</>;
}

function App() {
  const [exploded, setExploded] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <ActivityFinder />
    </>
  );
}

export default App;
