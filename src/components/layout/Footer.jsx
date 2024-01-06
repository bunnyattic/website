import React from "react";
import styles from "../../styles/components/layout/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-inner']}>
                <ul className={styles['footer-company-info-list']}>
                    <li className={styles['footer-company-info-item']}>&copy;bunnyattic</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;