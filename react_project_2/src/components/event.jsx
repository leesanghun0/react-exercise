import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/content.module.scss";


const Event = ()=>{

    return(<section className={styles["event"]}>
    <div className={styles["event-wapper"]}>
        <ul className={styles["event-list"]}>
           <li>Aliquam eu leo efficitur,</li> 
           <li>porttitor libero id.</li> 
        </ul>
        <Link href="#" className={styles["event-link"]}>Sign up for free!</Link>
    </div>
</section>)
}


export default Event;