"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function Experience() {
  return (
    <div className={styles.background}>
      <div
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
          <p className={`${oswald.className} ${styles.verticalText}`}>
            KINH NGHIỆM LÀM VIỆC
          </p>
          <div
            style={{
              width: 2,
              height: 200,
              backgroundColor: "#FFFFFF",
            }}
          ></div>
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
              rowGap:15,
              marginTop: "5%",
              marginLeft: "2%",
              overflowY: "auto",
            }}
          >
            {[1, 2].map((i, j) => {
              return (
                <div
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
                  <div style={{ width: "80%", display: "grid", rowGap: 15 }}>
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
          <div
            style={{
              backgroundColor: "#2E2E2E",
              width: "17%",
              aspectRatio: 0.98,
              alignSelf: "flex-end",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
