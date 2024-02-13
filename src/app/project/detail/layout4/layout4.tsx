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
export default function Layout4(props: layoutProps) {
  return (
    <div className={styles.layout4}>
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
            translateY: [-50, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "10%",
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
            translateY: [50, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "45%" }}
          src={props.section.images[0]}
        ></motion.img>
      </div>
      <div
        style={{
          gridColumn: "2/3",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <motion.img
          whileInView={{
            opacity: [0, 1],
            translateY: [50, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.02,
          }}
          style={{ width: "100%", height: "45%" }}
          src={props.section.images[1]}
        ></motion.img>
        <div
          style={{
            height: "45%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <motion.img
            whileInView={{
              opacity: [0, 1],
              translateY: [50, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 0.02,
            }}
            style={{ width: "45%", height: "100%" }}
            src={props.section.images[2]}
          ></motion.img>
          <motion.img
            whileInView={{
              opacity: [0, 1],
              translateY: [50, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 0.02,
            }}
            style={{ width: "45%", height: "100%" }}
            src={props.section.images[3]}
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
