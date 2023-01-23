import './App.css';
import { useState, useEffect, createRef } from 'react';
import { getRandomFromArray } from "./utils";
import Header from './components/Header';
import Footer from './components/Footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TradingHistoryContainer from "./components/TradingHistoryContainer";
import GameStatsContainer from "./components/GameStatsContainer";

function App() {

  const [trades, setTrades] = useState([]);

  const mainAppView = createRef(null);

  useEffect(() => {
    mainAppView.current.focus();
  }, [mainAppView]);

  const handleKeyPress = () => {
    const rand = Math.random() * getRandomFromArray([100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000,]);
    const side = getRandomFromArray([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
    const trade = {
      size: rand,
      side: side === 0 ? "BUY" : "SELL",
      signature: ""
    };

    setTrades(trades => [...trades, trade]);
  }
  
  return (
    <div tabIndex={0} onKeyPress={handleKeyPress} ref = {mainAppView}>
      <Header />
      <Container fluid className={"backgroundContainer"}>
        <Row className={"mainContainer"}>
            <Col md = {9} xs = {12} className={"leftMainContainer"}>
                <div>
                    <GameStatsContainer />
                </div>
            </Col>
            <Col md = {3} xs = {12} className={"rightMainContainer"}>
                <TradingHistoryContainer trades = {trades}/>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}


export default App;

