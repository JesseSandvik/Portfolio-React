import React from "react";

function ClockMessage() {
  const time = new Date().getHours();
      if (time < 12) {
          return <h3 className="morning">Good Morning</h3>;
      } else if (time >= 12 && time <= 18) {
          return <h3 className="afternoon">Good Afternoon</h3>;
      } else if (time > 18 && time <= 24) {
          return <h3 className="evening">Good Evening</h3>;
      } else {
          return null;
        }
  }
  
export default ClockMessage;