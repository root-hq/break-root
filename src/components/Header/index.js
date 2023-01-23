import styles from "./Header.module.css";

function Header() {

    return(
        <div className={styles.background}>
            <div>

            </div>
            <div>
                <img src={"root-transparent-new.svg"} className={styles.rootLogo} alt="logo" />
            </div>
            <div className={styles.twitterButton}>
                <a
                    href = {`https://twitter.com/roothq_`}
                    target = "_blank"
                >
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;
