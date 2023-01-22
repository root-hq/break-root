import { useEffect, useState } from "react";
import TradeRecord from "../TradeRecord";
import styles from "./TradingHistoryContainer.module.css";

function TradingHistoryContainer ({
    trades
}) {
    
    return (
        <div className={styles.background}>
            {
                trades.length === 0
                ?
                    <div>
                        <>{`Press any keys on your  `}</>
                        <i className="fa-regular fa-keyboard"></i>
                        <>{`  to place random trades`}</>    
                    </div>
                :
                    <div className={styles.tradesContainer}>
                        {
                            trades.map((k,v) => {
                                return (
                                    <TradeRecord key = {v} trade = {k} />
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default TradingHistoryContainer;