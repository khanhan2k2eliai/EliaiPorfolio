"use client";

import * as React from "react";
import styles from "./styles.module.css";

export default function Experience() {
  return (
    <div className={styles.background}>
      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            transform: "rotate(270deg)",
            color:'#FFFFFF'
          }}
        >
          <p
            style={{
              fontSize: 36,
              fontWeight: "500",
            }}
          >
            KINH NGHIỆM LÀM VIỆC
          </p>
          <div
            style={{
              width: "30%",
              height: 4,
              backgroundColor: "#FFFFFF", 
            }}
          ></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
