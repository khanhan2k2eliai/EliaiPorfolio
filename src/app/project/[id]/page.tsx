"use client";

import * as React from "react";
import Overview from "../overview/overview";
import Detail from "../detail/detail";
import { project } from "@/api/project/project";
import { oapi } from "@/utils/axios";
export default function Project({ params }: { params: { id: number } }) {
  const [targetProject, setTargetProject] = React.useState<any>();
  function scrollHorizontally(e: any) {
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    document.documentElement.scrollLeft -= delta * scrollSpeed;
    document.body.scrollLeft -= delta * scrollSpeed;
    console.log(document.documentElement.scrollLeft);
    e.preventDefault();
  }
  async function getProject() {
    if (!!params.id) {
      const res = await oapi.get("/project/" + params.id);
      console.log(res.data);
      setTargetProject(res.data);
    }
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
  React.useEffect(() => {
    getProject();
  }, [params]);
  if (!targetProject) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          backgroundColor: targetProject.main_color + "30",
          display: "inline-flex",
          overflow: "scroll",
        }}
      >
        <Overview
          main_color={targetProject.main_color}
          infor={{
            infomation: targetProject.information.filter(
              (c: any) => c.key != "intro"
            ),
            name: targetProject.name,
            thumbnail: targetProject.thumbnail,
          }}
        ></Overview>
        {targetProject.ProjectSections.map((section: any, index: any) => {
          return (
            <Detail
              main_color={targetProject.main_color}
              index={index + 1}
              key={section.name}
              section={section}
            ></Detail>
          );
        })}
      </div>
    );
  }
}
