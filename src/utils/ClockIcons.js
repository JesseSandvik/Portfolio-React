import React from "react";

function ClockIcons() {
  const time = new Date().getHours();
      if (time < 12) {
          return <i className="fas fa-sun morning"></i>;
      } else if (time >= 12 && time <= 18) {
          return <i className="far fa-sun afternoon"></i>;
      } else if (time > 18 && time <= 24) {
          return <i className="far fa-moon evening"></i>;
      } else {
          return null;
        }
  }
  
export default ClockIcons;