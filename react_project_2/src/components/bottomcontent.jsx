import React from "react";
import styles from "../sass/content.module.scss";
import product from "../images/product.jpg";

const Bottomcontent = ()=>{
    return(<section className={styles["bottom-content"]}>
    <div className={styles["bottom-content-wrapper"]}>
        <div className={styles["bottom-content-title"]}>
            <h2>Lorem lpsum</h2>
            <p>phasellus porttitor quis dolor ac commodo. Donec in vulputate turpis</p>
        </div>
        <div className={styles["contents-box"]}>
            <div className={styles["contents-box-images"]}>
                <img className={styles["contents-box-images-item"]} src={product} alt="임시" />
            </div>
            <div className={styles["contents-box-text"]}>
                <h2 className={styles["contents-box-title"]}>Vestibulum non nisi quis erat aliquet pellentesque</h2>
                <ol className={styles["contents-box-orderlist"]}>
                    <li>Curabitur nec consectetur augue</li>
                    <li>id convallis nibh. Cras augue tortor, ornare vitae molestie a, mollis iaculis tellus.</li>
                    <li>Quisque et ornare sapien.</li>  
                </ol>
            </div>
        </div>
    </div>
</section>);
}



export default Bottomcontent;