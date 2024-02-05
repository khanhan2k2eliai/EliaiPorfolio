"use client";

import * as React from "react";
export default function ScrollIndicator() {
  const myBarRef = React.useRef(null);
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
  }
  return (
    <div className="header">
      <div className="progress-container">
        <div className="progress-bar" id="myBar" ref={myBarRef}></div>
      </div>
    </div>
  );
}
