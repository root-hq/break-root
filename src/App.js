import styles from './App.css';
import { useState, useEffect, createRef } from 'react';
import { getRandomFromArray } from "./utils";
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

function App() {

  const [trades, setTrades] = useState([]);

  const mainAppView = createRef(null);

  useEffect(() => {
    mainAppView.current.focus();
  }, [mainAppView]);

  const handleKeyPress = () => {
    const rand = Math.random() * getRandomFromArray([100, 200, 300, 400, 500, 1000]);
    const side = getRandomFromArray([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
    const trade = {
      size: rand,
      side: side === 0 ? "BUY" : "SELL",
      signature: ""
    };

    setTrades(trades => [...trades, trade]);
  }
  
  return (
    <div className={styles.background} tabIndex={0} onKeyPress={handleKeyPress} ref = {mainAppView}>
      <Header />
      <MainComponent key = {trades.length} trades = {trades} />
      <Footer />
    </div>
  );
}


export default App;

