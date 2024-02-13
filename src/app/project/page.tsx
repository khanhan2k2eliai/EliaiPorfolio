"use client";

import * as React from "react";
import { portfolio } from "@/api/portfolio/portfolios";
import Overview from "./overview/overview";
import Detail from "./detail/detail";
import { project } from "@/api/project/project";
export default function Project() {
  function scrollHorizontally(e: any) {
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    document.documentElement.scrollLeft -= delta * scrollSpeed;
    document.body.scrollLeft -= delta * scrollSpeed;
    console.log(document.documentElement.scrollLeft);
    e.preventDefault();
  }
  React.useEffect(() => {
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, {
        passive: false,
      });
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener("mousewheel", scrollHorizontally);
      // Firefox
      window.removeEventListener("DOMMouseScroll", scrollHorizontally);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: portfolio.main_color + "30",
        display: "inline-flex",
        overflow:'scroll'
      }}
    >
      <Overview
        main_color={portfolio.main_color}
        infor={{
          infomation: project.information,
          introduction: project.introdution,
          name: project.name,
          thumbnail: project.thumbnail,
        }}
      ></Overview>
      {project.sections.map((section, index) => {
        return (
          <Detail
            main_color={portfolio.main_color}
            index={index + 1}
            key={section.name}
            section={section}
          ></Detail>
        );
      })}
    </div>
  );
}
