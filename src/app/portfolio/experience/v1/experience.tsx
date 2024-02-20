"use client";

import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import TextSpliter from "@/components/text-spliter/TextSpliter";
const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
import { motion, useInView } from "framer-motion";
interface work_experience {
  end_at: string;
  position: string;
  start_at: string;
  company_name: string;
  job_description: Array<string>;
}
interface experienceProps {
  workExperiences: Array<work_experience>;
  main_color: string;
}
export default function Experience(props: experienceProps) {
  const [showContent, setShowContent] = React.useState(false);
  const bgRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(bgRef);
  React.useEffect(() => {
    setShowContent(false);
  }, [isInView]);
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
      translateX: ["-30%", "0%"],
      duration: 0.2,
      delay: 0.02,
    },
    hidden: { opacity: 0 },
  };
  const Hitem = {
    visible: {
      opacity: 1,
      translateY: ["30%", "0%"],
      duration: 0.2,
      delay: 0.05,
    },
    hidden: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        ref={bgRef}
        className={styles.background}
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 1,
          delay: 0.02,
        }}
      >
        {!showContent && (
          <motion.div
            whileInView={{
              opacity: [0, 1],
              height: ["100%", "0%"],
            }}
            onAnimationComplete={(e) => {
              console.log("Animation end");
              setShowContent(true);
            }}
            transition={{
              duration: 2,
            }}
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "#FFFFFF",
            }}
          ></motion.div>
        )}
        {showContent && (
          <motion.div
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
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={list}
                className={`${oswald.className} ${styles.verticalText}`}
              >
                <motion.span
                  variants={item}
                  className={`${oswald.className}`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  KINH
                </motion.span>
                <motion.span
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {"\xa0"}
                </motion.span>
                <motion.span
                  variants={item}
                  className={`${oswald.className}`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  NGHIÊM
                </motion.span>
                <motion.span
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {"\xa0"}
                </motion.span>
                <motion.span
                  variants={item}
                  className={`${oswald.className}`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  LÀM
                </motion.span>
                <motion.span
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {"\xa0"}
                </motion.span>
                <motion.span
                  variants={item}
                  className={`${oswald.className}`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  VIÊC
                </motion.span>
              </motion.p>
              {/* <TextSpliter value="KINH NGHIỆM LÀM VIỆC" className={`${oswald.className} ${styles.verticalText}`} style={{}}></TextSpliter> */}
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  translateY: ["-40%", "0%"],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{
                  width: 2,
                  height: 200,
                  backgroundColor: `${props.main_color}`,
                }}
              ></motion.div>
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
                  rowGap: 15,
                  marginTop: "5%",
                  marginLeft: "4%",
                }}
              >
                {props.workExperiences.map((i, j) => {
                  return (
                    <motion.div
                      key={i.position}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <motion.div
                        whileInView={{
                          opacity: [0, 1],
                          translateY: ["40%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.02,
                        }}
                        style={{ color: "#475569", marginRight: "2%" }}
                      >
                        <p>
                          {i.start_at} - {i.end_at}
                        </p>
                      </motion.div>
                      <div
                        style={{ width: "80%", display: "grid", rowGap: 15 }}
                      >
                        <TextSpliter
                          value={i.position}
                          className=""
                          style={{ fontSize: 20, fontWeight: "700" }}
                        ></TextSpliter>
                        <TextSpliter
                          value={i.company_name}
                          className=""
                          style={{ fontSize: 16, fontWeight: "700" }}
                        ></TextSpliter>
                        <motion.ul
                          initial="hidden"
                          whileInView="visible"
                          variants={list}
                          style={{ color: "#475569", marginLeft: "3%" }}
                        >
                          {i.job_description.map((c: any) => {
                            return (
                              <motion.li
                                variants={Hitem}
                                style={{ marginBottom: 10 }}
                              >
                                {c}
                              </motion.li>
                            );
                          })}
                        </motion.ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  translateY: ["40%", "0%"],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.02,
                }}
                style={{
                  backgroundColor: `${props.main_color}`,
                  width: "17%",
                  aspectRatio: 0.98,
                  alignSelf: "flex-end",
                }}
              ></motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
