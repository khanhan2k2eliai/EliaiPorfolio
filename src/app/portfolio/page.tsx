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
import { portfolio } from "@/api/portfolio/portfolios";
export default function Portfolio() {
  return (
    <>
      {portfolio.template_option == 1 && (
        <div style={{ backgroundColor: portfolio.main_color + "10" }}>
          <About
            infor={{
              name: portfolio.full_name,
              career: portfolio.career,
              introduction: portfolio.introduction,
              avatar: portfolio.users.avatar,
              main_color: portfolio.main_color,
            }}
          ></About>
          <Experience
            workExperiences={portfolio.work_experience}
            main_color={portfolio.main_color}
          ></Experience>
          <Transition main_color={portfolio.main_color}></Transition>
          {portfolio.projects.map((project, index) => {
            return (
              <Project
                key={project.id}
                index={index + 1}
                main_color={portfolio.main_color}
                infor={{
                  name: project.name,
                  thumbnail: project.thumbnail,
                  introduction: project.introdution,
                }}
              ></Project>
            );
          })}
          <Contact
            infor={{
              phone: portfolio.phone,
              email: portfolio.email,
              facebook: portfolio.facebook_link,
              name: portfolio.full_name,
              avatar:portfolio.users.avatar
            }}
            main_color={portfolio.main_color}
          ></Contact>
        </div>
      )}
      {portfolio.template_option == 2 && (
        <div  style={{ backgroundColor: portfolio.main_color + "10" }}>
          <AboutV2
          main_color={portfolio.main_color}
            infor={{
              name: portfolio.full_name,
              career: portfolio.career,
              introduction: portfolio.introduction,
              avatar: portfolio.users.avatar,
              
            }}
          ></AboutV2>
          <ExperienceV2
            workExperiences={portfolio.work_experience}
            main_color={portfolio.main_color}
          ></ExperienceV2>
          <TransitionV2 main_color={portfolio.main_color}></TransitionV2>
          {portfolio.projects.map((project, index) => {
            return (
              <ProjectV2
                key={project.id}
                index={index + 1}
                main_color={portfolio.main_color}
                infor={{
                  name: project.name,
                  thumbnail: project.thumbnail,
                  introduction: project.introdution,
                }}
              ></ProjectV2>
            );
          })}
          <ContactV2
          main_color={portfolio.main_color}
            infor={{
              phone: portfolio.phone,
              email: portfolio.email,
              facebook: portfolio.facebook_link,
              avatar:portfolio.users.avatar,
              name: portfolio.full_name,
            }}
          ></ContactV2>
        </div>
      )}
    </>
  );
}
