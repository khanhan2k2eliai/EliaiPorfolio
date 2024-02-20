import * as React from "react";
import styles from "./styles.module.css";
import { Oswald,Inter } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
import { splitFullName } from "@/utils/split-fullname";
const oswald = Oswald({ subsets: ["latin","vietnamese"], weight: ["200","400", "700"] });
const inter = Inter({ subsets: ["latin","vietnamese"], weight: ["200","400", "700","100"] })
interface aboutProps {
  infor: {
    name: string;
    career: string;
    introduction: string;
    avatar: string;
  };
  main_color: string;
}
export default function AboutV2(props: aboutProps) {
  const { firstName, lastName } = splitFullName(props.infor.name);
  return (
    <div className={styles.container}>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          translateX: ["-30%", "0%"],
        }}
        transition={{
          duration: 0.6,
          delay: 0.02,
        }}
        className={styles.portfolioContainer}
      >
        <p className={`${inter.className} ${styles.portfolio}`} style={{color:props.main_color}}>portfolio</p>
      </motion.div>
      <div
        style={{
          gridColumn: "2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          className={styles.blackLayer}
          whileInView={{
            opacity: [0, 1],
            translateY: ["20%", "0%"],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          style={{
            backgroundImage: `-webkit-linear-gradient(
            left,
            ${props.main_color},
            ${props.main_color} 90%,
            transparent 80%,
            transparent 100%
          )`,
          }}
        >
          <img
            style={{ height: "90%", aspectRatio: 0.75 }}
            src={props.infor.avatar}
            alt="rectangel1"
          ></img>
        </motion.div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          width: "100%",
          gridColumn: "4/8",
        }}
      >
        <div className={styles.inforContainer}>
          <div style={{color:props.main_color , marginLeft: "7%" }}>
            <TextSpliter
              value={firstName}
              className=""
              style={{ fontSize: 16, color: "#475569", fontWeight: 500 }}
            ></TextSpliter>
            <TextSpliter
              value={lastName}
              style={{}}
              className={`${oswald.className} ${styles.name}`}
            ></TextSpliter>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  translateY: ["100%", "0%"],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{ width: "100%", height: 4, backgroundColor:props.main_color }}
              ></motion.div>
              <TextSpliter
                value={props.infor.career}
                className=""
                style={{
                  marginLeft: "4%",
                  fontSize: 22,
                  fontWeight: 100,
                  color: "#0F172A",
                }}
              ></TextSpliter>
            </motion.div>
          </div>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <TextSpliter
              value="Giới thiệu"
              style={{}}
              className={`${inter.className} ${styles.introTitle}`}
            ></TextSpliter>
            <motion.p
              whileInView={{
                opacity: [0, 1],
                translateY: ["30%", "0%"],
              }}
              transition={{
                duration: 1,
                delay: 0.02,
              }}
              className={styles.intro}
            >
              {props.infor.introduction}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
