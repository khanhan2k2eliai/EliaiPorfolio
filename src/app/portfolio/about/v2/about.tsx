import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
import { splitFullName } from "@/utils/split-fullname";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

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
        <p className={styles.portfolio}>portfolio</p>
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
            src="https://s3-alpha-sig.figma.com/img/528d/5a1f/de150e8f9d661d230953a3b696a7bc24?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWsu~NBhbvMgUOYTc5KqDlDL2iPYpUoaw0Xaz5dK6SSLaT5vmIqWkoIfg6jLfFjudYJbeqGTHjON4NA4AngsoI3WlnkgPIcMmmq3SZWHuLmIBKzOAgpbOauhL7zw68Injnn3A~wH-W9KqjitEMuf0ilSH2oPAzIK3ZgEKU5FmlvYprzNLu5PnZmbVTZdSJLfLRJ8U5B8aMNCzeVhOQ3s0Q69PGlSGxXwo8Vlf93AHv68~kywVmSOpXjeYqahd2cv5B7-iT1YTmSsmcHpEaa9PsVcJB8zdFCyG0fb9Wd2HWc2vE1brr5Gjx3UkzTmX0JIW0i3fKBPlRvoVF8eRGfrkg__"
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
              className=""
              style={{ fontSize: 20, fontWeight: "700" }}
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
