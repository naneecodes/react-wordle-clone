import React from "react";
import "./Form.css";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const secretWord = event.target.secretword.value;
    alert(`Your secret word is: ${secretWord}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}
