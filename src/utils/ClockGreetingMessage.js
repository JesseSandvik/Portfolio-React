import React from "react";

function ClockGreetingMessage() {
  const time = new Date().getHours();
      if (time < 12) {
          return <h1 className="morning">Jesse Sandvik.</h1>;
      } else if (time >= 12 && time <= 18) {
          return <h1 className="afternoon">Jesse Sandvik.</h1>;
      } else if (time > 18 && time <= 24) {
          return <h1 className="evening">Jesse Sandvik.</h1>;
      } else {
          return null;
        }
  }
  
export default ClockGreetingMessage;