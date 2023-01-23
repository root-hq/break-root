import styles from "./GameStatsContainer.module.css";
import Chart from "react-apexcharts";
import { delay, getCurrentPrice, getLiquidityData } from "../../utils";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

function GameStatsContainer() {

    const [data, setData] = useState({series: []});
    let toggle = true;
    
    const fetchLiquidityData = async(depth, step, dollarify) => {
        const data = await getLiquidityData(depth, step, dollarify);
        return data;
    }

    useEffect(()=> {
        const setDataState = async () => {
            if(toggle) {
                console.log("called: ", toggle);
                const dataVar = await fetchLiquidityData(1, 18, true);
                setData(dataVar);
                toggle = !toggle;
            }
            else {
                console.log("called: ", toggle);
                const dataVar = await fetchLiquidityData(1, 10, true);
                setData(dataVar);
                toggle = !toggle;
            }
        }

        setDataState();

        const interval = setInterval(() => {
            setDataState();
        }, 5_000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.mobileViewMessage}>{`Please switch to a larger device :)`}</div>
            <div className={styles.liquidityChartTitle}>Liquidity in the pool</div>
            <div className={styles.chartContainer}>
                {
                    data && data.series.length > 0
                    ?
                        <div>
                            <Chart className={styles.chart} type = {'bar'} series = {data.series} options = {data.options} />
                        </div>
                    :
                        <div>
                            <>Fetching data...</>
                        </div>
                }
            </div>
        </div>
    )
}

export default GameStatsContainer;