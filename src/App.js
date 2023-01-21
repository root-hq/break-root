import logo from './logo.svg';
import styles from './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
import { useState, useRef, useEffect, createRef } from "react";

function App() {

  const [count, setCount] = useState(0);

  const mainAppView = createRef(null);

  useEffect(() => {
    mainAppView.current.focus();
  }, [mainAppView]);

  const handleKeyPress = () => {
    setCount(count + 1);
    console.log("count: ", count);
  }
  
  return (
    <div className={styles.background} tabIndex={0} onKeyPress={handleKeyPress} ref = {mainAppView}>
      {/* <input type="text" onKeyPress={handleKeyPress} /> */}
      <Header />
      <MainComponent count = {count}/>
      <Footer />
    </div>
  );
}

export default App;
