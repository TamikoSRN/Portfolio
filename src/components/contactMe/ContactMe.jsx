import React, { useState } from "react";

import "./ContactMe.scss";

export default function ContactMe() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contactMe" id="contactMe">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Mesasage"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for contacting me, I will reply ASAP! ^^</span>
          )}
        </form>
      </div>
    </div>
  );
}
