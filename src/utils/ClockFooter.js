import React from "react";

function ClockFooter() {
  const time = new Date().getHours();
      if (time < 12) {
          return <h5 className="footer morning">Copyright &copy; 2021</h5>;
      } else if (time >= 12 && time <= 18) {
          return <h5 className="footer afternoon">Copyright &copy; 2021</h5>;
      } else if (time > 18 && time <= 24) {
          return <h5 className="footer evening">Copyright &copy; 2021</h5>;
      } else {
          return null;
        }
  }
  
export default ClockFooter;