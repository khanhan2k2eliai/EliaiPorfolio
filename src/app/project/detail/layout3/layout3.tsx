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
export default function Layout3(props: layoutProps) {
  return (
    <div className={styles.layout3}>
      <div
        style={{
          gridColumn: "1/2",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <motion.img
          viewport={{ once: true }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "44%" }}
          src={props.section.ProjectSectionImages[0]}
        ></motion.img>
        <motion.img
          viewport={{ once: true }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "44%", marginBottom: "5%" }}
          src={props.section.ProjectSectionImages[2]}
        ></motion.img>
      </div>
      <div
        style={{
          gridColumn: "2/3",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background:
            "linear-gradient(90deg, #0000 calc(100% - 1px), #00000030 0)",
          backgroundSize: "calc((100% - 1*1px)/4 + 6px) 100%",
        }}
      >
        <motion.img
          viewport={{ once: true }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "60%" }}
          src={props.section.ProjectSectionImages[2]}
        ></motion.img>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "3%",
          }}
        >
          <motion.p
            viewport={{ once: true }}
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.02,
            }}
            className={`${oswald.className} ${styles.title}`}
            style={{ color: props.main_color }}
          >
            {props.section.name}
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.02,
            }}
            className={styles.description}
          >
            {props.section.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
