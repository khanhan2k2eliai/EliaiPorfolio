"use client";

import * as React from "react";
import About from "./about/about";
import Experience from "./experience/experience";
import Transition from "./transition/transition";
import Project from "./project/project";
export default function Portfolio() {
  return (
    <div>
        <About></About>
        <Experience></Experience>
        <Transition></Transition>
        <Project></Project>
    </div>
  );
}
