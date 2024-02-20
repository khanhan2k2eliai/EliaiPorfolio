"use client";
import * as React from "react";
interface TextProps {
  value: string;
  style: any;
  className: string | "";
}
import { Oswald } from "next/font/google";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700", "300", "200", "500"],
});
export default function TextSpliter(props: TextProps) {
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
    <motion.span
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={list}
      style={{ display: "block", position: "relative", width: "100%" }}
    >
      {props.value
        .replaceAll(" ", " \xa0")
        .split(" ")
        .map(function (char, index) {
          return (
            <>
              {props.className != "" && (
                <motion.span
                  viewport={{ once: true }}
                  variants={item}
                  key={index + char + Date.now}
                  className={`${oswald.className} ${props.className} ${styles.textSplit}`}
                >
                  {`${char}`}
                </motion.span>
              )}
              {props.className == "" && (
                <motion.span
                  viewport={{ once: true }}
                  variants={item}
                  key={index + char + Date.now}
                  className={`${oswald.className}`}
                  style={{
                    ...props.style,
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  {`${char}`}
                </motion.span>
              )}
            </>
          );
        })}
    </motion.span>
  );
}
