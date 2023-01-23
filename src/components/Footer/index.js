import styles from "./Footer.module.css";

function Footer () {
    return (
        <div className={styles.background}>
            <>{"Possible only on"}<img className={styles.solanaLogo} src = "solanaLogo.svg"></img></>
        </div>
    )
}

export default Footer;