"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";

export default function ExperienceV2() {
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
        <div style={{ width: "80%", height: "90%",display:'flex', flexDirection:"column",alignItems:'flex-start'}}>
          <p className={`${oswald.className} ${styles.header}`}>
            kinh nghiệm làm việc
          </p>
          <div
           className={styles.experienceContainer}
          >
            {[1, 2, 3,4].map((c) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridAutoRows: "auto",
                      rowGap: "5%",
                      height: "100%",
                      borderRight: "1px groove #CBD5E1",
                      marginRight:'1%'
                    }}
                  >
                    <p style={{ fontWeight: "700",marginRight:30 }}>01/2022 - 12/2023</p>
                  </div>
                  <div style={{ display: "grid", rowGap: 15,marginLeft:'1%' }}>
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
                        Điều hành và giám sát quá trình thiết kế kiến trúc cho
                        nhiều dự án thương mại và nhà ở.
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <p className={styles.portfolio}>experience</p>
      </div>
    </div>
  );
}
