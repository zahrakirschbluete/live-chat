import React from "react";

import "./JoinStatement.css";

const JoinStatement = () => (
  <div className="textContainer">
    <div styles="display: 'flex'">
      <h1>
        Schnack ⚡️ - Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>

      <h2>
        You can chat with your friends by sharing the name of your room once you
        have created it.
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬇️
        </span>
      </h2>
    </div>
  </div>
);

export default JoinStatement;
