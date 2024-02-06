import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import transition from "../../../../public/transition.png";
import transition1 from "../../../../public/transition1.png";
import transition2 from "../../../../public/transition2.png";
export default function Transition() {
  return <div className={styles.container}>
    <Image alt=" " src={transition1} style={{height:'100%'}}></Image>
    <Image alt=" " src={transition} style={{alignSelf:'center',height:'35%',marginBottom:'15%',marginRight:'6%'}}></Image>
    <Image alt=" " src={transition2}  style={{height:'100%'}}></Image>
  </div>;
}
