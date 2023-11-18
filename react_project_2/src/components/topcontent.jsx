import React, { useState }  from "react";
import data from "../services/data";
import styles from "../sass/content.module.scss";
import Contents from "./Contents";
import scrollEvent from "../hooks/scrollEvent";


const Topcontent = ()=>{
   
    let [contentsBox] = useState(data);
    
    return(<main className={styles["top-content"]}>
    <div className={styles["top-content-wrapper"]}>

        <Contents contentsBox={contentsBox[0]}></Contents>
        <Contents contentsBox={contentsBox[1]}></Contents>
        <Contents contentsBox={contentsBox[2]}></Contents>
       
    </div>
</main>);
}

export default Topcontent;