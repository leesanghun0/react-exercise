import React, {useEffect} from "react";

import product from "../images/product.jpg";
import styles from "../sass/content.module.scss";   
import handleScroll from "../hooks/scrollEvent";

const Bottomcontent = ()=>{

    useEffect(() => {
        handleScroll();

    }, []);

    return(<section className={styles["bottom-content"]}>
    <div className={styles["bottom-content-wrapper"]}>
        <div className={styles["bottom-content-wrapper-title"]}>
            <h2>Lorem lpsum</h2>
            <p>phasellus porttitor quis dolor ac commodo. Donec in vulputate turpis</p>
        </div>
        <div className={styles["bottom-content-wrapper-box"]}>
            <div className={styles["bottom-content-wrapper-box-images"]}>
                <img className={styles["contents-box-images-item"]} src={product} alt="임시" />
            </div>
            <div className={styles["bottom-content-wrapper-box-text"]}>
                <ul className={styles["bottom-content-wrapper-box-text-title"]}>
                    <li>pharetra elit et,</li>
                    <li>tincidunt enim.</li>
                </ul>
                <ol className={styles["bottom-content-wrapper-box-text-orderlist"]}>
                    <li>Duis faucibus ullamcorper urna, sed vehicula lorem ullamcorper ut.</li>
                    <li>Cras accumsan, lorem eu varius pellentesque.</li>
                    <li>eget turpis. Vivamus sed dolor ligula.</li>  
                </ol>
            </div>
        </div>
    </div>
</section>);
}


export default Bottomcontent;
