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
    let arr = [...Array(150).keys()];
    const rand = Math.random() * getRandomFromArray(arr);
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
            <Col md = {3} xs = {12} className={"leftMainContainer"}>
                <TradingHistoryContainer trades = {trades}/>
            </Col>
            <Col md = {9} xs = {12} className={"rightMainContainer"}>
                <div>
                  <GameStatsContainer />
                </div>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}


export default App;

