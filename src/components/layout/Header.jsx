import React, { useEffect, useState } from "react";
import styles from "../../styles/components/layout/Header.module.scss";

function Header() {
    const [scrollClass, setScrollClass] = useState("");

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const scrollThreshold = 200;

        if (scrollPosition > scrollThreshold) {
            setScrollClass(styles["fixed"]);
        } else {
            setScrollClass("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <header className={`${styles["header"]} ${scrollClass}`}>
            <div className={styles["logo-container"]}>
                <button type="button" className={styles["logo-link"]}
                      onClick={() => scrollToSection("main")}>
                        BUNNYATTIC
                </button>
            </div>
            <nav className={styles["nav"]}>
                <ul className={styles["nav-list"]}>
                    <li className={styles["nav-item"]}>
                        <button type="button"
                            className={styles["nav-link"]}
                            onClick={() => scrollToSection("about")}
                        >
                            about
                        </button>
                    </li>
                    <li className={styles["nav-item"]}>
                        <button type="button"
                            className={styles["nav-link"]}
                            onClick={() => scrollToSection("ongoing")}
                        >
                            ongoing
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;