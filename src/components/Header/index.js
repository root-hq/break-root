import styles from "./Header.module.css";

function Header() {

    return(
        <div className={styles.background}>
            <img src={"root-transparent-new.svg"} className={styles.rootLogo} alt="logo" />
        </div>
    )
}

export default Header;
