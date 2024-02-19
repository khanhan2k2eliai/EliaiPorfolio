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
  main_color: string;
}
export default function Layout1(props: layoutProps) {
  return (
    <div className={styles.layout1}>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          translateY: [-50, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 0.02,
        }}
        style={{ gridRow: "1/8", gridColumn: "1/1" }}
      >
        <img
          style={{ height: "100%", width: "100%",objectFit:'fill' }}
          src={props.section.ProjectSectionImages[0]}
        ></img>
      </motion.div>
      <div
        style={{
          gridRow: "8/11",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(90deg, #0000 calc(100% - 1px), #00000030 0)",
          backgroundSize: "calc((100% - 5*5px)/4 + 6px) 100%",
        }}
      >
        <motion.p
          whileInView={{
            opacity: [0, 1],
            translateY: [50, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{
            fontWeight: "500",
            fontSize: 92,
            marginLeft: "2%",
            color: props.main_color,
          }}
          className={oswald.className}
        >
          {props.section.name}
        </motion.p>
        <motion.p
          whileInView={{
            opacity: [0, 1],
            translateY: [50, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{ width: "30%", marginRight: "2%" }}
        >
          {props.section.description}
        </motion.p>
      </div>
    </div>
  );
}
