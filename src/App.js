import logo from './logo.svg';
import styles from './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
import { useState, useEffect, createRef } from "react";

function App() {

  const [trades, setTrades] = useState([]);

  const mainAppView = createRef(null);

  useEffect(() => {
    mainAppView.current.focus();
  }, [mainAppView]);

  const handleKeyPress = () => {
    setTrades(trades => [...trades, trades.length]);
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
