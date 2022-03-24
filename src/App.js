import React, {useState, useCallback}  from 'react';

import Button from "./components/UI/Button/Button";
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {

  const[showParagraph, setShowpragraph] = useState(false);

  console.log("It works");

  const toggleParagraphHandler = useCallback(() => {
    setShowpragraph(prevShowParagraph => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle pargraph!</Button>
    </div>
  );
}

export default App;
