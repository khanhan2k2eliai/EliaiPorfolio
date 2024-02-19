"use client";

import * as React from "react";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import Layout1 from "./layout1/layout1";
import Layout2 from "./layout2/layout2";
import Layout3 from "./layout3/layout3";
import Layout4 from "./layout4/layout4";
export interface projectSection {
  name: string;
  description: string;
  ProjectSectionImages: Array<string>;
}
interface detailProps {
  section: projectSection;
  index: number;
  main_color:string;
}
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
export default function Detail(props: detailProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          props.index % 2 != 0
            ? `-webkit-linear-gradient(
        top,
        ${props.main_color+'30'},
        ${props.main_color+'30'} 30%,
        transparent 30%,
        transparent 30%
      )`
            : `-webkit-linear-gradient(
        bottom,
        ${props.main_color+'30'},
        ${props.main_color+'30'} 30%,
        transparent 30%,
        transparent 30%
      )`,
      }}
    >
      {props.section.ProjectSectionImages.length == 1 && (
        <Layout1 main_color={props.main_color} section={props.section}></Layout1>
      )}
      {props.section.ProjectSectionImages.length == 2 && (
        <Layout2 main_color={props.main_color} section={props.section}></Layout2>
      )}
      {props.section.ProjectSectionImages.length == 3 && (
        <Layout3 main_color={props.main_color} section={props.section}></Layout3>
      )}
      {props.section.ProjectSectionImages.length == 4 && (
        <Layout4 main_color={props.main_color} section={props.section}></Layout4>
      )}
    </div>
  );
}
