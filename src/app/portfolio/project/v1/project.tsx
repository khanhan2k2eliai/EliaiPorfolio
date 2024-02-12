import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
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
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/6b50/5ac0/7a3dfc1ff1cdac614c251ef1d1d9f44e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otupfk5eLQnuMRj08YdnX0dJwI1rgUsnZZ0-9YpPk9p1SYrLJ9QLiGuH8usKz6JH~E1AMbJUqiYvoH0~fgoq0-a7ICkC9KBm0a7mCSgZIT3mMAVWiCCBRoT2cSnaBNOPa0NULt-0FR3DOtJJ69PfRWjSWATEMerN1hjWrpKzIC7HpyDPXUeRwQQIkxrqiqp5Bx51uFPA~-MKKW807vmGh-PLBpfZ2UKyPFHWbfcMAbjBtM6y73W7dDasQh3R863LI-u3PRzcaL6bBZjRSOYL7zni2P4RPG0Khs3j2NAhLMmREgrFiSlkzAE~gAcuJ~WrNVR9qCyJClM6DOe4itjbiA__)`,
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
            style={{backgroundColor:'hsla(355, 51%, 97%, 1)',zIndex:2}}
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
            translateY: [100, 0],
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
