"use client";

import * as React from "react";
import About from "./about/v1/about";
import AboutV2 from "./about/v2/about";
import Experience from "./experience/v1/experience";
import ExperienceV2 from "./experience/v2/experience";
import Transition from "./transition/v1/transition";
import TransitionV2 from "./transition/v2/transition";
import Project from "./project/v1/project";
import Contact from "./contact/v1/contact";
import ProjectV2 from "./project/v2/project";
import ContactV2 from "./contact/v2/contact";
export default function Portfolio() {
  return (
    <div>
        {/* <About></About> */}
        <AboutV2></AboutV2>
        {/* <Experience></Experience> */}
        <ExperienceV2></ExperienceV2>
        {/* <Transition></Transition> */}
        <TransitionV2></TransitionV2>
        {/* <Project></Project> */}
        <ProjectV2></ProjectV2>
        {/* <Contact></Contact> */}
        <ContactV2></ContactV2>
    </div>
  );
}
