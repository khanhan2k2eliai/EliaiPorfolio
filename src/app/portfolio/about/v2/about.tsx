import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
import { motion } from "framer-motion";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutV2() {
  return (
    <div className={styles.container}>
      <div
        className={styles.portfolioContainer}
      >
        <p className={styles.portfolio}>portfolio</p>
      </div>
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
        <div
          className={styles.blackLayer}
        >
          <img
            style={{ height: "90%", aspectRatio: 0.75 }}
            src="https://s3-alpha-sig.figma.com/img/528d/5a1f/de150e8f9d661d230953a3b696a7bc24?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWsu~NBhbvMgUOYTc5KqDlDL2iPYpUoaw0Xaz5dK6SSLaT5vmIqWkoIfg6jLfFjudYJbeqGTHjON4NA4AngsoI3WlnkgPIcMmmq3SZWHuLmIBKzOAgpbOauhL7zw68Injnn3A~wH-W9KqjitEMuf0ilSH2oPAzIK3ZgEKU5FmlvYprzNLu5PnZmbVTZdSJLfLRJ8U5B8aMNCzeVhOQ3s0Q69PGlSGxXwo8Vlf93AHv68~kywVmSOpXjeYqahd2cv5B7-iT1YTmSsmcHpEaa9PsVcJB8zdFCyG0fb9Wd2HWc2vE1brr5Gjx3UkzTmX0JIW0i3fKBPlRvoVF8eRGfrkg__"
            alt="rectangel1"
          ></img>
        </div>
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
            {/* <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [ '100%','0%'],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={`${oswald.className} ${styles.name}`}
            >
              CHÍ LINH
            </motion.p> */}
            <TextSpliter value="CHÍ LINH" style={{}} className={`${oswald.className} ${styles.name}`}></TextSpliter>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width:'100%'
              }}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  translateY: ['100%','0%'],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{ width: "40%", height: 4, backgroundColor: "#2E2E2E" }}
              ></motion.div>
              <motion.p
               whileInView={{
                opacity: [0, 1],
                translateY: ['100%','0%'],
              }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{ marginLeft: "2%", fontSize: 22, fontWeight: 200,color:'#0F172A' }}
              >
                KIẾN TRÚC SƯ
              </motion.p>
            </motion.div>
          </div>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <motion.p
            style={{fontSize:20,fontWeight:'700'}}
            whileInView={{
              opacity: [0, 1],
              translateY: ['100%','0%'],
            }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
            >
              Giới thiệu
            </motion.p>
            <motion.p
              whileInView={{
                opacity: [0, 1],
                translateY: ['100%','0%'],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={styles.intro}
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
    </div>
  );
}
