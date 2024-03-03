import React from "react";
import styles from "../sass/content.module.scss";


function Contents(props) {
    return(<div className={styles["contents-box"]}>
    <div className={styles["contents-box-images"]}>
        <img className={styles["contents-box-images-item"]} src={props.contentsBox.images} alt="임시" />
    </div>
    <div className={`${styles["contents-box-text"]} contents-box-text`}>
        <h2 className={styles["contents-box-title"]}>{props.contentsBox.title}</h2>
        <p>{props.contentsBox.describe}</p>
    </div>
</div>)
}

export default Contents;