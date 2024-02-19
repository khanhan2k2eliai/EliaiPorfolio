import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { hexToHSL,hexToCssHsl } from "@/utils/hex-to-hsl";
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });

interface projectProps {
  index: number;
  main_color:string;
  infor: {
    name: string;
    thumbnail: string;
    introduction: string;
  };
}
export default function Project(props: projectProps) {
  const main_hsl =hexToCssHsl(props.main_color);
  return (
    <div className={styles.container}  >
      <div
        style={{
          height: "90%",
          width: "90%",
          marginTop: "8%",
          marginLeft: "10%",
        }}
      >
        {props.index != 1 && props.index % 2 != 0 && (
          <motion.div
            style={{
              color: "#0F172A",
              marginBottom: "2%",
            }}
            whileInView={{
              opacity: [0, 1],
              translateX: [-100, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.02,
            }}
          >
            <p
              className={oswald.className}
              style={{
                fontSize: 40,
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              Vinhomes Ocean park
            </p>
            <div
              style={{ width: "26%", height: 5, backgroundColor: "#0F172A" }}
            ></div>
          </motion.div>
        )}
        <motion.div
        whileInView={{
          opacity: [0, 1],
          translateX: [-100, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.02,
        }}
          style={{
            width: "100%",
            height: "80%",
            backgroundImage: `url(${props.infor.thumbnail})`,
            backgroundSize: "80% 100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <motion.div
            className={
              props.index != 1 ? styles.floatElement : styles.FfloatElement
            }
            whileInView={{
              opacity: [0, 1],
              translateX: [100, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.02,
            }}
            style={{backgroundColor:`hsla(${main_hsl?.h}, ${main_hsl?.s}%, 91%, 1)`,zIndex:2}}
          >
            {props.index == 1 && (
              <div className={styles.floatText}>
                <div
                  style={{
                    color: "#0F172A",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    marginBottom: "4%",
                  }}
                >
                  <p className={`${oswald.className} ${styles.name}`}>
                    Vinhomes Ocean park
                  </p>
                  <div
                    style={{
                      width: "26%",
                      height: 5,
                      backgroundColor: props.main_color,
                    }}
                  ></div>
                </div>
                <p>
                  Dự án Residences at Harmony Square là một tác phẩm kiến trúc
                  độc đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện
                  đại và yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa
                  quyện giữa không gian sống hiện đại và bản sắc đặc trưng của
                  cộng đồng. Dự án Residences at Harmony Square là một tác phẩm
                  kiến trúc độc đáo nằm ở trung tâm thành phố, kết hợp giữa kiến
                  trúc hiện đại và mang đậm yếu tố văn hóa địa phương.
                </p>
              </div>
            )}
            {props.index != 1 && (
              <p className={styles.floatText}>
                Dự án Residences at Harmony Square là một tác phẩm kiến trúc độc
                đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc hiện đại
                và yếu tố văn hóa địa phương. Thiết kế này mang lại sự hòa quyện
                giữa không gian sống hiện đại và bản sắc đặc trưng của cộng
                đồng. Dự án Residences at Harmony Square là một tác phẩm kiến
                trúc độc đáo nằm ở trung tâm thành phố, kết hợp giữa kiến trúc
                hiện đại và mang đậm yếu tố văn hóa địa phương.ại và bản sắc đặc
                trưng của cộng đồng.
              </p>
            )}
          </motion.div>
        </motion.div>
        {props.index % 2 == 0 && (
          <motion.div
          whileInView={{
            opacity: [0, 1],
            translateX: [-100, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.02,
          }}
            style={{
              color: "#0F172A",
              marginTop: "2%",
            }}
          >
            <p
              className={oswald.className}
              style={{
                fontSize: 35,
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              Vinhomes Ocean park
            </p>
            <div
              style={{ width: "26%", height: 5, backgroundColor: "#0F172A" }}
            ></div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
