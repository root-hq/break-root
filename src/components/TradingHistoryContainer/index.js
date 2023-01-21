import styles from "./TradingHistoryContainer.module.css";


function TradingHistoryContainer ({
    count
}) {

    return (
        <div className={styles.background}>
            {
                count === 0
                ?
                    <div>
                        <>Press any keys on your </>
                        <i className="fa-regular fa-keyboard"></i>
                        <> to place random trades</>    
                    </div>
                :
                    <>{count}</>
            }

        </div>
    )
}

export default TradingHistoryContainer;