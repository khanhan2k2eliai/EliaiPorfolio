"use client";

import * as React from "react";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
interface overviewProps {
  infor: {
    name: string;
    thumbnail: string;
    infomation: Array<{ key: string; value: string }>;
  };
  main_color:string
}
export default function Overview(props: overviewProps) {
  const list = {
    visible: {
      translateY: ["5%", "0%"],
      duration: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };
  const ditem = {
    visible: {
      opacity: 1,
      translateX: ["-2%", "0%"],
      duration: 0.2,
      delay: 0.02,
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          height: "95%",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ width: "100%" }}>
          <TextSpliter
            value={props.infor.name}
            className=""
            style={{ fontWeight: "500", fontSize: 92,color:props.main_color }}
          ></TextSpliter>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            height: "75%",
            marginTop: "3%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "15%",
              marginRight: "4%",
              overflowY: "auto",
            }}
          >
            {props.infor.infomation.map((i, j) => {
              return (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  style={{ marginBottom: "5%" }}
                  key={j}
                >
                  {" "}
                  <motion.p
                    variants={ditem}
                    style={{
                      fontSize: 20,
                      color: "rgba(100, 116, 139, 1)",
                      fontWeight: "500",
                      marginBottom: "3%",
                    }}
                  >
                    {i.key}
                  </motion.p>
                  <motion.p
                    variants={ditem}
                    style={{
                      fontSize: 20,
                      color: "rgba(15, 23, 42, 1)",
                      fontWeight: "500",
                    }}
                  >
                    {i.value}
                  </motion.p>
                </motion.div>
              );
            })}{" "}
          </div>
          <motion.img
            animate={{
              opacity: [0, 1],
              scaleX: [0.6, 1],
              animation:
                "scale-up-hor-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
              transformOrigin: "100% 10%",
            }}
            transition={{
              duration: 1,
              delay: 0.02,
            }}
            src={props.infor.thumbnail}
            style={{
              height: "95%",
              aspectRatio: 1.92,
            }}
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
