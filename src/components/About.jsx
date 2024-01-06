import React from "react";
import styles from "../styles/components/About.module.scss";

function About() {
    return (
        <section id="about" className={styles["about-section"]}>
            <div className={styles['about-inner']}>
                <h2 className="blind">소개</h2>
                <strong className="section-title">BUNNYATTIC</strong>
                <p className="section-text">꿈과 목표를 향해 달리는 지식나눔 크리에이터, 토끼다락입니다. 저는 퍼블리싱, 마크업, 웹접근성, 워드프레스에 관심이 많습니다. 사람은 모두 다르기에, 목표와 꿈은 다를 수 있습니다. 하지만 목표와 꿈을 향해 달려가는 것은 같습니다. 토끼다락은 목표와 꿈을 이루기 위해 항상 함께 달려갑니다.</p>
                <ul className={styles['about-list']}>
                    <li className={styles['about-item']}>
                        <a href="https://blog.naver.com/bunnyattic" className={`${styles['about-link']} ${styles['blog']}`} target="_blank" rel="noreferrer">
                            <span className="blind">네이버 블로그 바로가기</span>
                        </a>
                    </li>
                    <li className={styles['about-item']}>
                        <a href="https://www.youtube.com/@bunnyattic" className={`${styles['about-link']} ${styles['youtube']}`} target="_blank" rel="noreferrer">
                            <span className="blind">유튜브 채널 바로가기</span>
                        </a>
                    </li>
                    <li className={styles['about-item']}>
                        <a href="https://github.com/bunnyattic" className={`${styles['about-link']} ${styles['github']}`} target="_blank" rel="noreferrer">
                            <span className="blind">깃허브 바로가기</span>
                        </a>
                    </li>
                    <li className={styles['about-item']}>
                        <a href="mailto:yukim@bunnyattic.com" className={`${styles['about-link']} ${styles['email']}`} rel="noreferrer">
                            <span className="blind">이메일로 연락하기</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;