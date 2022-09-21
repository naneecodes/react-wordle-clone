import React, { useRef, useState } from "react";
import "./Form.css";

export default function Form() {
  //set State
  const [formResult, setFormResult] = useState(null);

  // HTML elements
  const formElem = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const secretWord = event.target.secretword.value;
    alert(`Your secret word is: ${secretWord}`);
    setFormResult(true);
  };
  return (
    <>
      {formResult === null && (
        <form onSubmit={handleSubmit} ref={formElem}>
          <label>
            <p>What's the secret word? 🤫</p>
            <input
              type="password"
              name="secretword"
              minLength="5"
              maxLength="5"
              autoComplete="off"
              required
            />
          </label>
          <button type="submit" className="button-85">
            Let's play!
          </button>
        </form>
      )}
    </>
  );
}
