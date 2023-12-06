import React, { useState, useEffect, useRef } from "react";
import data from "../services/data";
import styles from "../sass/content.module.scss";
import Contents from "./Contents";
import handleScroll from "../hooks/scrollEvent";

const TopContent = () => {
    const [contentsBox] = useState(data);
    const contentRefs = useRef([]);

    useEffect(() => {
        handleScroll();

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);


    return (
        <main className={styles["top-content"]}>
            <div className={styles["top-content-wrapper"]}>
                {contentsBox.map((content, index) => (
                    <Contents
                        key={index}
                        contentsBox={content}
                        ref={(el) => (contentRefs.current[index] = el)}
                    />
                ))}
            </div>
        </main>
    );
};

export default TopContent;
