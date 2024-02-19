import * as React from "react";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import { projectSection } from "../detail";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
interface layoutProps {
  section: projectSection;
  main_color:string;
}
export default function Layout2(props: layoutProps) {
  return (
    <div className={styles.layout2}>
      <div
        style={{
          gridColumn: "1/2",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background:
            "linear-gradient(90deg, #0000 calc(100% - 1px), #00000030 0)",
          backgroundSize: "calc((100% - 1*1px)/3 + 6px) 100%",
        }}
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            delay: 0.02,
          }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p className={`${oswald.className} ${styles.title}`} style={{color:props.main_color}}>{props.section.name}</p>
          <p className={styles.description}>
            {props.section.description}
          </p>
        </motion.div>
        <motion.img
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "55%", marginBottom: "5%" }}
          src={props.section.ProjectSectionImages[0]}
        ></motion.img>
      </div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration:2,
          delay: 0.02,
        }}
        style={{
          gridColumn: "2/3",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          style={{ height: "95%", width: "100%", marginBottom: "5%" }}
          src={props.section.ProjectSectionImages[1]}
        ></img>
      </motion.div>
    </div>
  );
}
