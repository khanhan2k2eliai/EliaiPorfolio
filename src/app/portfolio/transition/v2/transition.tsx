"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald, Inter } from "next/font/google";
import union1 from "../../../../../public/union1.png";
import union2 from "../../../../../public/union2.png";
import union3 from "../../../../../public/union3.png";
import union4 from "../../../../../public/union4.png";
import union5 from "../../../../../public/union5.png";
import Image from "next/image";
import TextSpliter from "@/components/text-spliter/TextSpliter";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";
interface transitionProps {
  main_color: string;
}
export default function TransitionV2(props: transitionProps) {
  const TransitionImage = React.forwardRef(
    (props, ref: React.Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={union1}
        style={{
          height: "84%",
          aspectRatio: 0.27,
          alignSelf: "flex-end",
          marginRight: "1%",
        }}
      ></Image>
    )
  );
  const TransitionImage2 = React.forwardRef(
    (props, ref: React.Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={union2}
        style={{
          height: "84%",
          aspectRatio: 0.27,
          alignSelf: "flex-start",
          marginRight: "1%",
        }}
      ></Image>
    )
  );
  const TransitionImage3 = React.forwardRef(
    (props, ref: React.Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={union3}
        style={{
          height: "84%",
          aspectRatio: 0.27,
          alignSelf: "flex-end",
          marginRight: "1%",
        }}
      ></Image>
    )
  );
  const TransitionImage4 = React.forwardRef(
    (props, ref: React.Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={union4}
        style={{
          height: "88%",
          aspectRatio: 0.27,
          alignSelf: "flex-start",
          marginRight: "1%",
        }}
      ></Image>
    )
  );
  const TransitionImage5 = React.forwardRef(
    (props, ref: React.Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={union5}
        style={{ height: "84%", aspectRatio: 0.27, alignSelf: "flex-end" }}
      ></Image>
    )
  );
  const MotionTransitionImage = motion(TransitionImage, {
    forwardMotionProps: true,
  });
  const MotionTransition2Image = motion(TransitionImage2, {
    forwardMotionProps: true,
  });
  const MotionTransition3Image = motion(TransitionImage3, {
    forwardMotionProps: true,
  });
  const MotionTransition4Image = motion(TransitionImage4, {
    forwardMotionProps: true,
  });
  const MotionTransition5Image = motion(TransitionImage5, {
    forwardMotionProps: true,
  });
  const list = {
    visible: {
      transition: { when: "beforeChildren", staggerChildren: 0.3 },
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: [0, 0.75, 1],
      translateY: [50, 0],
      duration: 0.6,
      delay: 0.02,
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className={styles.container}>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          translateX: ["-30%", "0%"],
        }}
        transition={{
          duration: 0.6,
          delay: 0.02,
        }}
        className={styles.featuredContainer}
      >
        <p className={`${styles.featured} ${inter.className}`}>featured</p>
      </motion.div>
      <div
        style={{
          gridColumn: "2/8",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginLeft: "13%",
            }}
          >
            <motion.p
              whileInView={{
                opacity: [0, 1],
                translateY: ["30%", "0%"],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={`${oswald.className}`}
              style={{ fontWeight: "200", fontSize: 30 }}
            >
              các
            </motion.p>
            <TextSpliter
              value="Dự án nổi bật"
              className={`${styles.header} ${oswald.className}`}
              style={{}}
            ></TextSpliter>
            <motion.p
              whileInView={{
                opacity: [0, 1],
                translateY: ["30%", "0%"],
              }}
              transition={{
                duration: 0.6,
                delay: 0.02,
              }}
              className={`${oswald.className}`}
              style={{ fontWeight: "200", fontSize: 30 }}
            >
              Đã làm
            </motion.p>
          </div>
          <motion.div
            style={{
              height: "61%",
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              marginLeft: "15%",
            }}
            initial="hidden"
            whileInView="visible"
            variants={list}
          >
            <MotionTransitionImage variants={item}></MotionTransitionImage>
            <MotionTransition2Image variants={item}></MotionTransition2Image>
            <MotionTransition3Image variants={item}></MotionTransition3Image>
            <MotionTransition4Image variants={item}></MotionTransition4Image>
            <MotionTransition5Image variants={item}></MotionTransition5Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
