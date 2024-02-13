"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { splitFullName } from "@/utils/split-fullname";
import { motion } from "framer-motion";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

interface aboutProps {
  infor: {
    name: string;
    career: string;
    introduction: string;
    avatar: string;
    main_color: string;
  };
}
export default function About(props: aboutProps) {
  const { firstName, lastName } = splitFullName(props.infor.name);
  return (
    <div className={styles.container}>
      <div
        style={{
          borderRightWidth: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          borderRight: "1px groove #CBD5E1",
        }}
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
            translateY: ["5%", "0%"],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          className={styles.blackbox}
          style={{
            backgroundColor: props.infor.main_color,
          }}
        ></motion.div>
      </div>
      <div style={{ borderRight: "1px groove #CBD5E1", height: "100%" }}>
        <div className={styles.centerContainer}>
          <div style={{ color: props.infor.main_color, marginLeft: "7%" }}>
            <TextSpliter
              value={firstName}
              className=""
              style={{
                fontSize: 16,
                color: "#475569",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            ></TextSpliter>
            <TextSpliter
              value={lastName}
              className=""
              style={{
                fontSize: 102,
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            ></TextSpliter>
            <motion.div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 0.75, 1],
                  translateY: [50, 25, 20, 15, 10, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{
                  width: "40%",
                  marginRight: "2%",
                  height: 4,
                  backgroundColor: props.infor.main_color,
                }}
              ></motion.div>
              <TextSpliter
                value={props.infor.career}
                className=""
                style={{
                  fontSize: 24,
                  fontWeight: 200,
                  textTransform: "uppercase",
                }}
              ></TextSpliter>
            </motion.div>
          </div>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <TextSpliter
              value="Giới thiệu"
              className=""
              style={{ fontWeight: "700", fontSize: 20 }}
            ></TextSpliter>
            <motion.p
              whileInView={{
                opacity: [0, 1],
                translateY: ["30%", "0%"],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              style={{
                fontStyle: "italic",
                maxWidth: "95%",
                color: "#475569",
                marginTop: "2%",
              }}
            >
              {props.infor.introduction}
            </motion.p>
          </div>
        </div>
      </div>
      <div style={{ borderRightWidth: 1, height: "100%" }}>
        <motion.img
          whileInView={{
            opacity: [0, 1],
            translateY: ["30%", "0%"],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          className={styles.avatar}
          src={props.infor.avatar}
          alt="rectangel1"
        ></motion.img>
      </div>
    </div>
  );
}
