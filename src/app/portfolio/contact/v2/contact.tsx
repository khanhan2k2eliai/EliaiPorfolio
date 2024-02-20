"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald,Inter } from "next/font/google";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const oswald = Oswald({
  subsets: ["latin","vietnamese"],
  weight: ["200", "400", "500", "700"],
});
const inter = Inter({ subsets: ["latin","vietnamese"], weight: ["200","400", "700","100"] })
console.log(oswald);
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion, useAnimationFrame } from "framer-motion";
interface contactProps {
  infor: {
    phone: string;
    email: string;
    facebook: string;
    name: string;
    avatar: string;
  };
  main_color: string;
}
export default function ContactV2(props: contactProps) {
  const list = {
    visible: {
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      translateY: ["30%", "0%"],
      duration: 0.2,
      delay: 0.02,
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          gridColumn: "1/6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
            translateY: [100, 0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          style={{
            height: "60%",
            width: "40%",
            display: "grid",
            gridTemplateColumns: "repeat(12,8%)",
            gridTemplateRows: "repeat(12,8%)",
          }}
        >
          <div
            className={styles.blackLayer}
            style={{ backgroundColor: props.main_color }}
          ></div>
          <img
            style={{
              height: "100%",
              aspectRatio: 0.75,
              gridColumn: "2/13",
              gridRow: "2/13",
            }}
            src={props.infor.avatar}
            alt="rectangel1"
          ></img>
        </motion.div>
        <div
          style={{
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ color: props.main_color }}>
            <TextSpliter
              value="Let's Talk"
              className={`${oswald.className} ${styles.header}`}
              style={{}}
            ></TextSpliter>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                translateY: [50, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              style={{
                width: "50%",
                height: 5,
                backgroundColor: props.main_color,
                marginBottom: "10%",
              }}
            ></motion.div>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                translateY: [50, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={list}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  marginRight: 20,
                  color: "#2E2E2E",
                }}
              >
                <motion.p style={{ marginBottom: 16 }} variants={item}>
                  SDT
                </motion.p>
                <motion.p style={{ marginBottom: 16 }} variants={item}>
                  Email
                </motion.p>
                <motion.p variants={item}>Facebook</motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={list}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  fontWeight: "700",
                  color: "#2E2E2E",
                }}
              >
                <motion.p style={{ marginBottom: 16 }} variants={item}>
                  {props.infor.phone}
                </motion.p>
                <motion.p style={{ marginBottom: 16 }} variants={item}>
                  {props.infor.email}
                </motion.p>
                <motion.a
                  href={props.infor.facebook}
                  style={{ textDecoration: "underline",color: "#2E2E2E" }}
                  variants={item}
                >
                  {props.infor.name}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className={styles.more}
            whileInView={{
              opacity: [0, 1],
              translateY: [50, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.02,
            }}
          >
            <TextSpliter
              value="Xem thêm các dự án đã làm"
              style={{
                fontSize: 20,
                fontWeight: "500",
                textTransform: "uppercase",
              }}
              className=""
            ></TextSpliter>
            <OpenInNewIcon sx={{ fontSize: 30 }}></OpenInNewIcon>
          </motion.div>
        </div>
      </div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          translateX: [50, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
        }}
        className={styles.featuredContainer}
      >
        <p className={`${styles.featured} ${inter.className}`} style={{ color: props.main_color }}>
          Let's Talk
        </p>
      </motion.div>
    </div>
  );
}
