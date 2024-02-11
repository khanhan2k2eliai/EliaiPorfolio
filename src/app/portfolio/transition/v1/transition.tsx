import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import transition from "../../../../../public/transition.png";
import transition1 from "../../../../../public/transition1.png";
import transition2 from "../../../../../public/transition2.png";
import { motion } from "framer-motion";
import { Ref } from "react";
export default function Transition() {
  const TransitionImage = React.forwardRef(
    (props, ref: Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={transition}
        style={{
          alignSelf: "center",
          height: "35%",
          marginBottom: "15%",
          width: "35%",
        }}
      ></Image>
    )
  );
  const Transition1Image = React.forwardRef(
    (props, ref: Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={transition1}
        style={{ height: "100%", width: "20%" }}
      ></Image>
    )
  );
  const Transition2Image = React.forwardRef(
    (props, ref: Ref<HTMLImageElement | null>) => (
      <Image
        ref={ref}
        alt=" "
        src={transition2}
        style={{ height: "100%", width: "20%" }}
      ></Image>
    )
  );
  const MotionTransition1Image = motion(Transition1Image, {
    forwardMotionProps: true,
  });
  const MotionTransitionImage = motion(TransitionImage, {
    forwardMotionProps: true,
  });
  const MotionTransition2Image = motion(Transition2Image, {
    forwardMotionProps: true,
  });
  return (
    <div className={styles.container}>
      <MotionTransition1Image
        whileInView={{
          opacity: [0, 1],
          translateX: [-300, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.02,
        }}
      ></MotionTransition1Image>
      <MotionTransitionImage
        whileInView={{
          opacity: [0, 1],
          translateY: [-100, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.02,
        }}
      ></MotionTransitionImage>

      <MotionTransition2Image
        whileInView={{
          opacity: [0, 1],
          translateX: [200, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.02,
        }}
      ></MotionTransition2Image>
    </div>
  );
}
