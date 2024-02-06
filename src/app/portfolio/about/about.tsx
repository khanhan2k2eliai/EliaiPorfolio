"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"],weight: ['400', '700'] });
export default function About() {
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
        <div
          className={styles.blackbox}
          style={{
            backgroundColor: "#2E2E2E",
          }}
        ></div>
      </div>
      <div style={{ borderRight: "1px groove #CBD5E1", height: "100%" }}>
        <div className={styles.centerContainer}>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <p style={{ fontSize: 16,color: "#475569", fontWeight: 500 }}>Đồng Công</p>
            <p className={oswald.className} style={{  fontSize: 102, fontWeight: "700" }}>
              CHÍ LINH
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{ width: "40%", height: 4, backgroundColor: "#2E2E2E" }}
              ></div>
              <p style={{ marginLeft: "2%", fontSize: 24, fontWeight: 200 }}>
                KIẾN TRÚC SƯ
              </p>
            </div>
          </div>
          <div style={{ color: "#2E2E2E", marginLeft: "7%" }}>
            <h1>Giới thiệu</h1>
            <p
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
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderRightWidth: 1, height: "100%" }}>
        <img
          className={styles.avatar}
          src="https://s3-alpha-sig.figma.com/img/528d/5a1f/de150e8f9d661d230953a3b696a7bc24?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWsu~NBhbvMgUOYTc5KqDlDL2iPYpUoaw0Xaz5dK6SSLaT5vmIqWkoIfg6jLfFjudYJbeqGTHjON4NA4AngsoI3WlnkgPIcMmmq3SZWHuLmIBKzOAgpbOauhL7zw68Injnn3A~wH-W9KqjitEMuf0ilSH2oPAzIK3ZgEKU5FmlvYprzNLu5PnZmbVTZdSJLfLRJ8U5B8aMNCzeVhOQ3s0Q69PGlSGxXwo8Vlf93AHv68~kywVmSOpXjeYqahd2cv5B7-iT1YTmSsmcHpEaa9PsVcJB8zdFCyG0fb9Wd2HWc2vE1brr5Gjx3UkzTmX0JIW0i3fKBPlRvoVF8eRGfrkg__"
          alt="rectangel1"
        ></img>
      </div>
    </div>
  );
}
