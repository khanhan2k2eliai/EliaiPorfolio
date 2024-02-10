"use client";
import * as React from "react";
interface TextProps {
  value: string;
  style: any;
}
import { Oswald } from "next/font/google";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
export default function TextSpliter(props: TextProps) {
  return (
    <motion.div>
      {props.value.split(" ").map(function (char, index) {
        return (
          <motion.span
          whileInView={{
            opacity: [0,0.75, 1],
            scaleX:[0.2,1],
            scaleY:[0.5,1],
            translateX: [50,25,20,15,10,5, 0],
            translateY: [50,25,20,15,10,5, 0],
          }}
          transition={{
            duration: 2,
            delay: index /5,
            
          }}
            key={index}
            className={`${oswald.className} ${"letter"}`}
            style={{ ...props.style }}
          >
            {char +' '}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
