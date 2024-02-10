"use client";

import * as React from "react";
import About from "./about/v1/about";
import AboutV2 from "./about/v2/about";
import Experience from "./experience/v1/experience";
import ExperienceV2 from "./experience/v2/experience";
import Transition from "./transition/v1/transition";
import Project from "./project/v1/project";
import Contact from "./contact/v1/contact";
export default function Portfolio() {
  return (
    <div>
        {/* <About></About> */}
        <AboutV2></AboutV2>
        {/* <Experience></Experience> */}
        <ExperienceV2></ExperienceV2>
        <Transition></Transition>
        <Project></Project>
        <Contact></Contact>
    </div>
  );
}
