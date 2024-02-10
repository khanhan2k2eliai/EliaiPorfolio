"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";
export default function ContactV2() {
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
        <div
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
          ></div>
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
        </div>
        <div style={{height:'60%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
          <div>
            <motion.p
              whileInView={{
                opacity: [0, 0.75, 1],
                translateY: [50, 25, 20, 15, 10, 5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={`${oswald.className} ${styles.header}`}
            >
              Let's talk
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
              style={{ width: "50%", height: 5, backgroundColor: "#0F172A",marginBottom:'10%' }}
            ></motion.div>
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
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  marginRight: 20,
                  color: "#2E2E2E",
                }}
              >
                <p style={{ marginBottom: 16 }}>SDT</p>
                <p style={{ marginBottom: 16 }}>Email</p>
                <p>Facebook</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  fontWeight: "700",
                  color: "#2E2E2E",
                }}
              >
                <p style={{ marginBottom: 16 }}>0797043481</p>
                <p style={{ marginBottom: 16 }}>anbuibz66@gmail.com</p>
                <p style={{ textDecoration: "underline" }}>Chi Linh</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.more}
            whileInView={{
              opacity: [0, 0.75, 1],
              translateY: [50, 25, 20, 15, 10, 5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.02,
            }}
          >
            <p
              className={oswald.className}
              style={{
                fontSize: 20,
                fontWeight: "500",
                textTransform: "uppercase",
                marginRight: "1%",
              }}
            >
              Xem thêm các dự án đã làm
            </p>
            <OpenInNewIcon sx={{ fontSize: 30 }}></OpenInNewIcon>
          </motion.div>
        </div>
      </div>
      <div className={styles.featuredContainer}>
        <p className={styles.featured}>Let's Talk</p>
      </div>
    </div>
  );
}
