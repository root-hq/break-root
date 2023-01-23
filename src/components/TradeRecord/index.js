import { useEffect, useState } from "react";
import styles from "./TradeRecord.module.css";
import { swapOnRoot } from "../../utils/index";
import { TailSpin } from "react-loading-icons";

function TradeRecord ({
    trade,
}) {
    const [isLoading, setIsLoading] = useState(trade.signature === "" ? true : false);
    const [loadedVal, setLoadedVal] = useState(null);


    const loadData = async () => {
        const sig = await swapOnRoot(trade);
        setIsLoading(false);
        trade.signature = sig;
    };

    useEffect(() => {
        if(loadedVal === null) {
            loadData();
        }
    }, []);

    return (
        <div className={styles.background}>
            {
            trade.side === "BUY"
            ?
                <div className={styles.backgroundBuy}>
                    <div>BUY {trade.size.toFixed(3)} SOL</div>
                    <div>
                        {
                            isLoading
                            ?
                                <TailSpin height={`1.2em`} speed={`1.7`} stroke={`#64686c`} strokeWidth={`5`} />
                            :
                                <a 
                                    className={styles.executedSign}
                                    href={`https://explorer.solana.com/tx/${trade.signature}?cluster=devnet`}
                                    target="_blank"
                                >
                                    <>Show tx <i className="fa-solid fa-up-right-from-square"></i></>
                                </a>
                        }
                    </div>
                </div>
            :
                <div className={styles.backgroundSell}>
                    <div>SELL {trade.size.toFixed(3)} SOL</div>
                    <div>
                        {
                            isLoading
                            ?
                                <TailSpin height={`1.2em`} speed={`1.7`} stroke={`#64686c`} strokeWidth={`5`} />
                            :
                                <a
                                    className={styles.executedSign}
                                    href={`https://explorer.solana.com/tx/${trade.signature}?cluster=devnet`}
                                    target="_blank"
                                >
                                    <>Show tx <i className="fa-solid fa-up-right-from-square"></i></>
                                </a>
                            }
                    </div>
                </div>
            }
        </div>
    )
}

export default TradeRecord;