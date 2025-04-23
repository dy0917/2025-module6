import { useState } from "react";
import { useFormInput } from "../utils/inputHook";
export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  // similar state variables mapped to form inputs

  const [nameInputProps, nameReset, callName, name] = useFormInput("Mary");
  const [emailInputProps, emailReset] = useFormInput("mary@poppins.com");

  function handleSubscribe() {
    nameReset();
    emailReset();
    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      {name}
      <label>
        First name: {/* form inputs with similar props */}
        <input {...nameInputProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <button
        onClick={() => {
          callName();
        }}
      >
        callName
      </button>
      <div>{status}</div>
    </div>
  );
}
