import React from "react";
import styles from "../styles/components/Ongoing.module.scss";

function Ongoing() {
    return (
        <>
            <section id="ongoing" className={styles['ongoing-section']}>
                <div className={styles['ongoing-inner']}>
                    <h2 className="blind">진행중</h2>
                    <strong className="section-title">Sharing</strong>
                    <p className="section-text">부족하지만 제가 아는 지식들을 나눕니다. 단편적으로나마 공유한 지식들이 도움이 되었으면 좋겠습니다. 조금씩이라도 배우고 성장해서 앞으로 나아갈 수 있는 우리들이 될 수 있었으면 좋겠어요!</p>
                    <a href="https://blog.naver.com/bunnyattic" className="section-link" target="_blank" rel="noreferrer">지식나눔 →</a>
                    <strong className="section-title">Mentoring</strong>
                    <p className="section-text">마크업 개발(퍼블리싱)을 공부하고 있는데 어디서부터 시작해야 할지 모를 때, 포트폴리오 사이트를 만드는 도중 어떻게 코드를 짜야 할지 고민이 될 때 도움이 되어드릴 수 있어요. 필요하다면, 편하게 메일 주세요!</p>
                    <a href="mailto:yukim@bunnyattic.com" className="section-link" rel="noreferrer">메일 보내기 →</a>
                </div>
            </section>
        </>
    );
}

export default Ongoing;