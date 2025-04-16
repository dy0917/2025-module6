import { useEffect, useRef } from "react";
import { useState } from "react";

export default function Child() {
  const [form, setForm] = useState({});
  const [mood, setMood] = useState("happy");
  const ref = useRef();
  console.log("ref.current.value", ref.current?.value ? ref.current.value : "");

  console.log("updated mood", mood);

  const setMoodOnClick = () => {
    setMood("tired");
  };

  const updateFirstName = (firstName) => {
    setForm({ ...form, firstName });
  };
  const updateLastName = (lastName) => {
    setForm({ ...form, lastName });
  };

  console.log("form", form);
  useEffect(() => {
    console.log("useEffect", mood);
  }, [mood]);
  return (
    <>
      <div>
        <form>
          <input name="firstName" type="text" ref={ref} />
          <input
            name="lastName"
            type="text"
            onKeyUp={(e) => {
              updateLastName(e.target.value);
            }}
          />
        </form>
      </div>

      <div className="MoodChanger componentBox">Current Mood: {mood}</div>
      <button onClick={setMoodOnClick}>Stay Up Late</button>

      <button onClick={() => setMood("hungry")}>Skip Lunch</button>
    </>
  );
}
