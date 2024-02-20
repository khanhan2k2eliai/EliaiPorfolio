"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin","vietnamese"],
  weight: ["200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";

interface projectProps {
  index: number;
  main_color: string;
  infor: {
    name: string;
    thumbnail: string;
    introduction: string;
  };
}
export default function ProjectV2(props: projectProps) {
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "93%",
          height: "85%",
          display: "flex",
          flexDirection:
            props.index == 1 || props.index % 2 != 0 ? "row" : "row-reverse",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
            translateX: props.index %2 !=0 ?[-50, 0] : [50,0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          style={{
            height: "100%",
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems:
              props.index == 1 || props.index % 2 != 0
                ? "flex-end"
                : "flex-start",
            justifyContent: "flex-end",
            marginRight: "5%",
          }}
        >
          <div
            style={{
              color: props.main_color,
              display: "flex",
              flexDirection: "column",
              alignItems:
                props.index == 1 || props.index % 2 != 0
                  ? "flex-end"
                  : "flex-start",
              textAlign:
                props.index == 1 || props.index % 2 != 0 ? "right" : "left",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: props.main_color,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Dự án
            </p>
            <p className={`${oswald.className} ${styles.header}`}>
              Vinhomes Ocean park
            </p>
          </div>
          <div
            style={{
              width: "90%",
              height: 4,
              backgroundColor: props.main_color,
              marginTop: "15%",
            }}
          ></div>
          {(props.index == 1 || props.index % 2 == 0) && (
            <p
              style={{
                fontStyle: "italic",
                maxWidth: "100%",
                color: "#475569",
                textAlign: props.index == 1 ? "right" : "left",
                marginTop: "15%",
                fontSize: 16,
              }}
            >
              “Dự án Residences at Harmony Square là một tác phẩm kiến trúc độc
              đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện đại và
              yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa quyện giữa
              không gian sống hiện đại & bản sắc đặc trưng của cộng đồng. Dự án
              Residences at Harmony Square là một tác phẩm kiến trúc độc đáo nằm
              ở trung tâm thành phố.”
            </p>
          )}
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            translateX: props.index %2 !=0 ?[50, 0] : [-50,0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.02,
          }}
          style={{ height: "100%", width: "80%", marginRight: "5%" }}
        >
          {/* 88% */}
          <img
            style={{
              height: props.index != 1 && props.index % 2 != 0 ? "88%" : "100%",
              aspectRatio: 1.3,
            }}
            src={props.infor.thumbnail}
          ></img>
          {props.index != 1 && props.index % 2 != 0 && (
            <p
              style={{
                fontStyle: "italic",
                maxWidth: "100%",
                color: "#475569",
                textAlign: "left",
                marginTop: "2%",
                fontSize: 16,
              }}
            >
              “Dự án Residences at Harmony Square là một tác phẩm kiến trúc độc
              đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện đại và
              yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa quyện giữa
              không gian sống hiện đại & bản sắc đặc trưng của cộng đồng. Dự án
              Residences at Harmony Square là một tác phẩm kiến trúc độc đáo nằm
              ở trung tâm thành phố.”
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
