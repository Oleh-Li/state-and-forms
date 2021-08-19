import React from "react";

const Feedback = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <button type="button" onClick={handleGood}>
      Good
    </button>
    <button type="button" onClick={handleNeutral}>
      Neutral
    </button>
    <button type="button" onClick={handleBad}>
      Bad
    </button>
  </div>
);

export default Feedback;
