"use client";

import * as React from "react";
import About from "./about/about";
import Experience from "./experience/experience";
import Transition from "./transition/transition";
export default function Portfolio() {
  return (
    <div>
        <About></About>
        <Experience></Experience>
        <Transition></Transition>
    </div>
  );
}
