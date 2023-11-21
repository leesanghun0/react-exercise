import React from "react";
import styles from "../sass/content.module.scss";

const Banner = ()=>{

    return (<section className={styles["banner"]}>
    <ul className={styles["banner-slogun"]}>
        <li>Etiam laoreet elit</li>
        <li>in tortor laoreet</li>
    </ul>
</section>);
}

export default Banner;
