import React from "react";

const HomePage = () => {
  return (
    <div>
      <div class="noise"></div>
      <div class="overlay"></div>
      <div class="terminal">
        <h1>
          Error <span class="errorcode">404</span>
        </h1>
        <p class="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p class="output">
          Please try to <a href="random">go back</a> {" "}
        </p>
        <p class="output">Good luck.</p>
      </div>
    </div>
  );
};

export default HomePage;
