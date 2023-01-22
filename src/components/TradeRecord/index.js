import styles from "./TradeRecord.module.css";

function TradeRecord ({
    i
}) {
    return (
        <div className={styles.background}>
            Trade Record: {i}
        </div>
    )
}

export default TradeRecord;