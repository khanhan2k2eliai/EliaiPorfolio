"use client";
import * as React from "react";
import styles from "./styles.module.css";
import { Oswald } from "next/font/google";
import union1 from '../../../../../public/union1.png';
import union2 from '../../../../../public/union2.png';
import union3 from '../../../../../public/union3.png';
import union4 from '../../../../../public/union4.png';
import union5 from '../../../../../public/union5.png';
import Image from "next/image";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});
import { motion, useAnimationFrame } from "framer-motion";

export default function TransitionV2() {
  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer}>
        <p className={styles.featured}>featured</p>
      </div>
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
          <div style={{alignSelf:'flex-start',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',marginLeft:'13%'}}>
            <p style={{fontWeight:'200',fontSize:30}}>các</p>
            <p className={`${styles.header} ${oswald.className}` }>Dự án nổi bật</p>
            <p style={{fontWeight:'200',fontSize:30}}>Đã làm</p>
          </div>
          <div style={{height:'61%', alignSelf:'center', display:'flex',justifyContent:'center',marginLeft:'15%'}}>

            <Image alt=" " src={union1} style={{height:'84%',aspectRatio:0.27,alignSelf:'flex-end',marginRight:'1%'}}></Image>
            <Image alt=" " src={union2} style={{height:'84%',aspectRatio:0.27,alignSelf:'flex-start',marginRight:'1%'}}></Image>
            <Image alt=" " src={union3} style={{height:'84%',aspectRatio:0.27,alignSelf:'flex-end',marginRight:'1%'}}></Image>
            <Image alt=" " src={union4} style={{height:'88%',aspectRatio:0.27,alignSelf:'flex-start',marginRight:'1%'}}></Image>
            <Image alt=" " src={union5} style={{height:'84%',aspectRatio:0.27,alignSelf:'flex-end'}}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
