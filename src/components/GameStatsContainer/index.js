import styles from "./GameStatsContainer.module.css";
import Chart from "react-apexcharts";
import { getLiquidityData } from "../../utils";
import { useEffect, useState } from "react";

function GameStatsContainer() {

    const [data, setData] = useState();

    const fetchLiquidityData = async() => {
        const data = await getLiquidityData(1, true);
        return data;
    }

    useEffect(()=> {
        const setDataState = async () => {
            const dataVar = await fetchLiquidityData();
            console.log("receiveD: ", dataVar);
            setData(dataVar);
        }

        if(data === null || data === undefined) {
            setDataState();
            console.log("set: ", data);
        }
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.liquidityChartTitle}>Liquidity in the pool</div>
            <div className={styles.chartContainer}>
                {
                    data && data.series
                    ?
                        <div>
                            {/* <Chart series = {data.series} options = {data.options} height = {`400px`} width = {`700px`}/> */}
                            <Chart type = {'bar'} series = {data.series} options = {data.options} height = {`500px`} width = {`1000px`}/>
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