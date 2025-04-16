import { useState, useRef } from "react";

export default function LoginForm({ email }) {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const ref = useRef();

  if (ref.current) {
    console.log("ref.current", ref.current.value);
  }
  const validation = (input) => {
    if (input.length < 5) {
      setErrorMessage("email must longer than 5");
      setUserEmail(input);
    } else {
      setUserEmail(input);
      setErrorMessage("");
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userEmail,
      userPassword,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="LoginForm componentBox">
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => validation(e.target.value)}
            />
          </label>
          {errorMessage}
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>

          <div className="formRow">
            <label>
              repeated Password:
              <input type="password" ref={ref} name="password" />
            </label>
          </div>
        </div>
        <div>{userEmail}</div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
