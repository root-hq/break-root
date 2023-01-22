import styles from "./MainComponent.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TradingHistoryContainer from "../TradingHistoryContainer";
import GameStatsContainer from "../GameStatsContainer";
import { useEffect, useState } from "react";

function MainComponent({
    trades
}) {

    return(
        <Container fluid className={styles.background}>
            <Row className={styles.mainContainer}>
                <Col md = {9} xs = {12} className={styles.leftMainContainer}>
                    <div>
                        <GameStatsContainer />
                    </div>
                </Col>
                <Col md = {3} xs = {12} className={styles.rightMainContainer}>
                    <TradingHistoryContainer trades = {trades}/>
                </Col>
            </Row>
        </Container>
    )
}

export default MainComponent;