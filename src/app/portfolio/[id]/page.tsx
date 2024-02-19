"use client";

import * as React from "react";
import About from "../about/v1/about";
import AboutV2 from "../about/v2/about";
import Experience from "../experience/v1/experience";
import ExperienceV2 from "../experience/v2/experience";
import Transition from "../transition/v1/transition";
import TransitionV2 from "../transition/v2/transition";
import Project from "../project/v1/project";
import Contact from "../contact/v1/contact";
import ProjectV2 from "../project/v2/project";
import ContactV2 from "../contact/v2/contact";
import { portfolio } from "@/api/portfolio/portfolios";
import { oapi } from "@/utils/axios";
export default function Portfolio({ params }: { params: { id: number } }) {
  const [targetPortfolio,setTargetPortfolio]= React.useState<any>();
  async function getPorfolio() {
    if(!!params.id){
      const res = await oapi.get(
        "/portfolio/" + params.id
      );
      console.log(res.data);
     setTargetPortfolio(res.data);
    }
  }
  React.useEffect(()=>{
    getPorfolio();
  },[params])
  if(!targetPortfolio){
    return (<div>Loading ...</div>)
  }
  else{
    return (
      <>
        {targetPortfolio.template_option == 1 && (
          <div style={{ backgroundColor: targetPortfolio.main_color + "30" }}>
            <About
              infor={{
                name: targetPortfolio.full_name,
                career:targetPortfolio.career,
                introduction: targetPortfolio.introduction,
                avatar: portfolio.users.avatar,
                main_color: targetPortfolio.main_color,
              }}
            ></About>
            <Experience
              workExperiences={targetPortfolio.work_experience}
              main_color={targetPortfolio.main_color}
            ></Experience>
            <Transition main_color={targetPortfolio.main_color}></Transition>
            {targetPortfolio.Projects.map((project:any, index:number) => {
              return (
                <Project
                  key={project.id}
                  index={index + 1}
                  main_color={targetPortfolio.main_color}
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
                phone: targetPortfolio.phone,
                email: targetPortfolio.email,
                facebook: targetPortfolio.facebook_link,
                name: targetPortfolio.full_name,
                avatar:portfolio.users.avatar
              }}
              main_color={targetPortfolio.main_color}
            ></Contact>
          </div>
        )}
        {targetPortfolio.template_option == 2 && (
          <div  style={{ backgroundColor: targetPortfolio.main_color + "10" }}>
            <AboutV2
            main_color={targetPortfolio.main_color}
              infor={{
                name: targetPortfolio.full_name,
                career: targetPortfolio.career,
                introduction: targetPortfolio.introduction,
                avatar: portfolio.users.avatar,
                
              }}
            ></AboutV2>
            <ExperienceV2
              workExperiences={targetPortfolio.work_experience}
              main_color={targetPortfolio.main_color}
            ></ExperienceV2>
            <TransitionV2 main_color={targetPortfolio.main_color}></TransitionV2>
            {targetPortfolio.Projects.map((project:any, index:number) => {
              return (
                <ProjectV2
                  key={project.id}
                  index={index + 1}
                  main_color={targetPortfolio.main_color}
                  infor={{
                    name: project.name,
                    thumbnail: project.thumbnail,
                    introduction: project.introdution,
                  }}
                ></ProjectV2>
              );
            })}
            <ContactV2
            main_color={targetPortfolio.main_color}
              infor={{
                phone: targetPortfolio.phone,
                email: targetPortfolio.email,
                facebook: targetPortfolio.facebook_link,
                avatar:portfolio.users.avatar,
                name: targetPortfolio.full_name,
              }}
            ></ContactV2>
          </div>
        )}
      </>
    );
  }
  
}
