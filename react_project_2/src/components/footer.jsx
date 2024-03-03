import React from 'react';
import styles from '../sass/footerLayout.module.scss';

const Footer = ()=>{
    return (<footer className={styles["footer"]}>
    <div className={styles["footer-wapper"]}>
        <h3 className={styles["footer-wapper-title"]}>Contact us</h3>
        <div className={styles["footer-wapper-middle"]}>
            <span>coffee@coffee.com</span> 
            <a href="mailto:lsh93620@gmail.com">send mail</a>
        </div>
        <div className={styles["footer-wapper-copyright"]}>
            <p>©coffee. All rights reserved.</p>
        </div>
    </div>
    </footer>
);}

export default Footer;