"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion, useAnimationFrame } from "framer-motion";
interface contactProps {
  infor: {
    phone: string;
    email: string;
    facebook: string;
    name: string;
  };
  main_color:string;
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
          <div className={styles.blackLayer} style={{backgroundColor:props.main_color}}></div>
          <img
            style={{
              height: "100%",
              aspectRatio: 0.75,
              gridColumn: "2/13",
              gridRow: "2/13",
            }}
            src="https://s3-alpha-sig.figma.com/img/528d/5a1f/de150e8f9d661d230953a3b696a7bc24?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWsu~NBhbvMgUOYTc5KqDlDL2iPYpUoaw0Xaz5dK6SSLaT5vmIqWkoIfg6jLfFjudYJbeqGTHjON4NA4AngsoI3WlnkgPIcMmmq3SZWHuLmIBKzOAgpbOauhL7zw68Injnn3A~wH-W9KqjitEMuf0ilSH2oPAzIK3ZgEKU5FmlvYprzNLu5PnZmbVTZdSJLfLRJ8U5B8aMNCzeVhOQ3s0Q69PGlSGxXwo8Vlf93AHv68~kywVmSOpXjeYqahd2cv5B7-iT1YTmSsmcHpEaa9PsVcJB8zdFCyG0fb9Wd2HWc2vE1brr5Gjx3UkzTmX0JIW0i3fKBPlRvoVF8eRGfrkg__"
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
          <div style={{color:props.main_color}}>
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
                <motion.p
                  style={{ textDecoration: "underline" }}
                  variants={item}
                >
                  {props.infor.name}
                </motion.p>
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
                marginRight: "1%",
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
        <p className={styles.featured} style={{color:props.main_color}}>Let's Talk</p>
      </motion.div>
    </div>
  );
}
