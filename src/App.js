import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

const App = () => {
  const [showmsg,setShowmsg] = useState(false)
  const toggle =(e)=>{
    if(showmsg) setShowmsg(false)
    else setShowmsg(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showmsg ? <div className="msg" id="msg" >Hello World!</div> : null}
        <p>
        <Button label="Click Me!" toggle={toggle}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
