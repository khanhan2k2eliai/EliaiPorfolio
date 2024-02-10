"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

export default function About() {
  // anime.timeline({loop: true})
  // .add({
  //   targets: '.letter',
  //   scale: [4,1],
  //   opacity: [0,1],
  //   translateZ: 0,
  //   easing: "easeOutExpo",
  //   duration: 950,
  //   delay: (el, i) => 70*i
  // }).add({
  //   targets: '.ml2',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  // });
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
          opacity: [0,0.75, 1],
          translateY: [50,25,20,15,10,5, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.02,
        }}
          className={styles.blackbox}
          style={{
            backgroundColor: "#2E2E2E",
          }}
        ></motion.div>
      </div>
      <div style={{ borderRight: "1px groove #CBD5E1", height: "100%" }}>
        <div className={styles.centerContainer}>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              style={{ fontSize: 16, color: "#475569", fontWeight: 500 }}
            >
              Đồng Công
            </motion.p>
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={oswald.className}
              style={{ fontSize: 102, fontWeight: "700" }}
            >
              CHÍ LINH
            </motion.p>

            <motion.div
              style={{
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
                style={{ width: "40%", height: 4, backgroundColor: "#2E2E2E" }}
              ></motion.div>
              <motion.p
                whileInView={{
                  opacity: [0, 0.75, 1],
                  translateY: [50, 25, 20, 15, 10, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{ marginLeft: "2%", fontSize: 24, fontWeight: 200 }}
              >
                KIẾN TRÚC SƯ
              </motion.p>
            </motion.div>
          </div>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <motion.h1
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
            >
              Giới thiệu
            </motion.h1>
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
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
              “Là một kiến trúc sư với 5 năm kinh nghiệm trong lĩnh vực thiết kế
              kiến trúc. Trải qua nhiều dự án đa dạng, tôi đã phát triển kỹ năng
              chuyên sâu trong việc tạo ra các không gian sống và làm việc sáng
              tạo, tích hợp các yếu tố estetica với sự tiện ích và bền vững. Sứ
              mệnh của tôi là tạo ra những công trình kiến trúc độc đáo và mang
              lại trải nghiệm tuyệt vời cho người sử dụng.”
            </motion.p>
          </div>
        </div>
      </div>
      <div style={{ borderRightWidth: 1, height: "100%" }}>
        <motion.img
          whileInView={{
            opacity: [0, 0.75, 1],
            translateY: [50, 25, 20, 15, 10, 5, 0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          className={styles.avatar}
          src="https://s3-alpha-sig.figma.com/img/528d/5a1f/de150e8f9d661d230953a3b696a7bc24?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWsu~NBhbvMgUOYTc5KqDlDL2iPYpUoaw0Xaz5dK6SSLaT5vmIqWkoIfg6jLfFjudYJbeqGTHjON4NA4AngsoI3WlnkgPIcMmmq3SZWHuLmIBKzOAgpbOauhL7zw68Injnn3A~wH-W9KqjitEMuf0ilSH2oPAzIK3ZgEKU5FmlvYprzNLu5PnZmbVTZdSJLfLRJ8U5B8aMNCzeVhOQ3s0Q69PGlSGxXwo8Vlf93AHv68~kywVmSOpXjeYqahd2cv5B7-iT1YTmSsmcHpEaa9PsVcJB8zdFCyG0fb9Wd2HWc2vE1brr5Gjx3UkzTmX0JIW0i3fKBPlRvoVF8eRGfrkg__"
          alt="rectangel1"
        ></motion.img>
      </div>
    </div>
  );
}
