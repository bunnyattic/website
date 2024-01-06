import React from "react";
import styles from "../styles/components/Intro.module.scss";

function Intro() {
    return (
        <section className={styles['intro-section']}>
            <div className="inner">
                <h2 className="blind">인트로</h2>
                <ul className={styles['intro-list']}>
                    <li className={styles['intro-item']}>
                        <strong className={styles['intro-number']}>01.</strong>
                        <h3 className={styles['intro-title']}>Share Knowledges</h3>
                        <p className={styles['intro-desc']}>
                            개발, 퍼블리싱, 워드프레스, 디자인 등 IT 지식을 배우고 나눕니다. 유튜브, 블로그, 깃허브 등에서 공유하고 있어요.
                        </p>
                    </li>
                    <li className={styles['intro-item']}>
                        <strong className={styles['intro-number']}>02.</strong>
                        <h3 className={styles['intro-title']}>Markup Mentoring</h3>
                        <p className={styles['intro-desc']}>
                            마크업 개발자(퍼블리셔)로 전향하고 싶은데 어디서부터 시작해야 햘지 몰라 갑갑하신 분들을 위해 멘토링을 진행하고 있어요.
                        </p>
                    </li>
                    <li className={`${styles['intro-item']} ${styles.disabled}`}>
                        <strong className={styles['intro-number']}>03.</strong>
                        <h3 className={styles['intro-title']}>HTML Templates</h3>
                        <p className={styles['intro-desc']}>
                            상업적으로 사용 가능한 반응형 HTML 템플릿을 제작하여 배포합니다. HTML 파일과 리액트 파일로 다운로드 받을 수 있습니다.
                        </p>
                    </li>
                    <li className={`${styles['intro-item']} ${styles.disabled}`}>
                        <strong className={styles['intro-number']}>04.</strong>
                        <h3 className={styles['intro-title']}>Markup Components</h3>
                        <p className={styles['intro-desc']}>
                            웹 생태계를 위해 오픈소스 UI 컴포넌트를 제작하여 배포합니다. UI 컴포넌트를 자유롭게 활용해보세요.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Intro;