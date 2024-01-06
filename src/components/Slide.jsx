import React from "react";
import styles from "../styles/components/Slide.module.scss";

function Slide() {
    return (
        <section className={styles['slide-section']} id="main">
            <h1 className="blind">토끼다락</h1>
        </section>
    );
}

export default Slide;