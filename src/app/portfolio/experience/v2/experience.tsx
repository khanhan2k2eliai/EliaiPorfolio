"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald, Inter } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["200", "400", "700", "100"],
});
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion, useAnimationFrame } from "framer-motion";

interface work_experience {
  end_at: string;
  position: string;
  start_at: string;
  company_name: string;
  job_description: Array<string>;
}
interface experienceProps {
  workExperiences: Array<work_experience>;
  main_color: string;
}
export default function ExperienceV2(props: experienceProps) {
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
  const citem = {
    visible: {
      opacity: 1,
      translateX: ["2%", "0%"],
      duration: 0.2,
      delay: 0.02,
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gridColumn: "1/6",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: props.main_color,
          }}
        >
          <TextSpliter
            value={"Kinh Nghiệm Làm Việc"}
            className={`${oswald.className} ${styles.header}`}
            style={{}}
          ></TextSpliter>
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={list}
            className={styles.experienceContainer}
          >
            {props.workExperiences.map((c, index) => {
              return (
                <motion.div
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="visible"
                  variants={list}
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <motion.div className={styles.listDate} variants={ditem}>
                    <p style={{ fontWeight: "700" }}>
                      {c.start_at} - {c.end_at}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={citem}
                    style={{
                      display: "grid",
                      gridAutoRows: "minmax(15px, max)",
                      rowGap: 15,
                      marginLeft: "2%",
                      color: "#0F172A",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.position}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                      }}
                    >
                      {c.company_name}
                    </p>
                    <ul style={{ color: "#475569", marginLeft: "3%" }}>
                      {c.job_description.map((c) => {
                        return (
                          <li style={{ marginBottom: 10, width: "70%" }}>
                            {c}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <motion.div
        viewport={{ once: true }}
        whileInView={{
          opacity: [0, 1],
          translateX: ["30%", "0%"],
        }}
        transition={{
          duration: 0.6,
          delay: 0.02,
        }}
        className={styles.portfolioContainer}
        style={{ color: props.main_color }}
      >
        <p className={`${styles.portfolio} ${inter.className}`}>experience</p>
      </motion.div>
    </div>
  );
}
