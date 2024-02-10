"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });
import { motion, useAnimationFrame } from "framer-motion";

export default function Experience() {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <>
      <motion.div
        className={styles.background}
        whileInView={{
          opacity: [0, 0.75, 1],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
        }}
      >
        {!showContent && (
          <motion.div
            animate={{
              opacity: [0, 0.75, 1],
              height: ["100%", "0%"],
            }}
            onAnimationComplete={(e) => {
              console.log("Animation end");
              setShowContent(true);
            }}
            transition={{
              duration: 2,
            }}
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "#FFFFFF",
            }}
          ></motion.div>
        )}
        {showContent && (
          <motion.div
            style={{
              width: "90%",
              height: "81%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                marginRight: "1%",
                color: "#FFFFFF",
              }}
            >
              <motion.p
                whileInView={{
                  opacity: [0, 0.75, 1],
                  translateY: [50, 25, 20, 15, 10, 5, 0],
                  transform: "scale(-1)",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                className={`${oswald.className} ${styles.verticalText}`}
              >
                KINH NGHIỆM LÀM VIỆC
              </motion.p>
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
                  width: 2,
                  height: 200,
                  backgroundColor: "#FFFFFF",
                }}
              ></motion.div>
            </div>
            <div
              style={{
                height: "100%",
                width: "95%",
                backgroundColor: "#FFFFFF",
                display: "flex",
              }}
            >
              <div
                className={styles.content}
                style={{
                  height: "80%",
                  width: "80%",
                  display: "grid",
                  gridAutoRows: "auto",
                  rowGap: 15,
                  marginTop: "5%",
                  marginLeft: "2%",
                  overflowY: "auto",
                }}
              >
                {[1, 2].map((i, j) => {
                  return (
                    <motion.div
                      whileInView={{
                        opacity: [0, 0.75, 1],
                        translateY: [50, 25, 20, 15, 10, 5, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        delay: j / 100,
                      }}
                      key={i}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ color: "#475569", marginRight: "2%" }}>
                        <p>01/2024 - 12/2024</p>
                      </div>
                      <div
                        style={{ width: "80%", display: "grid", rowGap: 15 }}
                      >
                        <p style={{ fontSize: 20, fontWeight: "700" }}>
                          TỔNG GIÁM ĐỐC
                        </p>
                        <p style={{ fontSize: 16, fontWeight: "700" }}>
                          Công ty cổ phần kiến trúc và xây dựng PQR
                        </p>
                        <ul style={{ color: "#475569", marginLeft: "3%" }}>
                          <li style={{ marginBottom: 10 }}>
                            Quản lý và phát triển đội ngũ thiết kế
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            Xây dựng và phát triển thương hiệu công ty
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            Điều hành và giám sát quá trình thiết kế kiến trúc
                            cho nhiều dự án thương mại và nhà ở.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div
                style={{
                  backgroundColor: "#2E2E2E",
                  width: "17%",
                  aspectRatio: 0.98,
                  alignSelf: "flex-end",
                }}
              ></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
