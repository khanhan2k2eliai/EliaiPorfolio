import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import transition1 from "../../../../../public/transition1.png";
import transition2 from "../../../../../public/transition2.png";
import { motion } from "framer-motion";
import { Ref } from "react";
import { Oswald, Inter } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["200", "400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
});
interface transitionProps {
  main_color: string;
}
export default function Transition(props: transitionProps) {
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
  const MotionTransition2Image = motion(Transition2Image, {
    forwardMotionProps: true,
  });
  return (
    <div className={styles.container}>
      <MotionTransition1Image
        viewport={{ once: true }}
        whileInView={{
          opacity: [0, 1],
          translateX: [-300, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
        }}
      ></MotionTransition1Image>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          height: "80%",
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: [0, 1],
          translateY: [-100, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
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
            width: "65%",
            borderRight: "1px groove " + props.main_color,
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              width: "95%",
              aspectRatio: 20,
              borderTop: "1px groove " + props.main_color,
              borderLeft: "1px groove " + props.main_color,
            }}
          ></div>
          <p
            className={`${styles.header}`}
            style={{
              fontWeight: "300",
              fontSize: 30,
              color: "#475569",
              marginTop: "2%",
            }}
          >
            CÁC
          </p>
          <p
            className={`${styles.header} ${oswald.className}`}
            style={{ color: props.main_color }}
          >
            Dự án nổi bật
          </p>
          <p
            className={`${styles.header}`}
            style={{
              fontWeight: "300",
              fontSize: 30,
              color: "#475569",
              marginBottom: "2%",
            }}
          >
            ĐÃ LÀM
          </p>
          <div
            style={{
              alignSelf: "flex-end",
              width: "95%",
              aspectRatio: 20,
              borderBottom: "1px groove " + props.main_color,
              borderLeft: "1px groove " + props.main_color,
            }}
          ></div>
        </div>
      </motion.div>

      <MotionTransition2Image
        viewport={{ once: true }}
        whileInView={{
          opacity: [0, 1],
          translateX: [200, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
        }}
      ></MotionTransition2Image>
    </div>
  );
}
