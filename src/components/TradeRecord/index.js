import styles from "./TradeRecord.module.css";

function TradeRecord ({
    trade
}) {
    return (
        <div className={styles.background}>
            {
            trade.side === "BUY"
            ?
                <div className={styles.backgroundBuy}>
                    <div>BUY {trade.size.toFixed(3)} SOL</div>
                    <div>status</div>
                </div>
            :
                <div className={styles.backgroundSell}>
                    <div>SELL {trade.size.toFixed(3)} SOL</div>
                    <div>status</div>
                </div>
            }
        </div>
    )
}

export default TradeRecord;