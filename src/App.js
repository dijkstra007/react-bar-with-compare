import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BarContainer percent={50} />
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
const BarContainer = ({percent}) => {
  const defaultHeight = 100
  return (
    <div style={{display:'flex', alignItems: 'flex-end'}}>
      <Bar height={defaultHeight} backgroundColor='#faebd7'/>
      <Bar height={defaultHeight*(1+percent*0.01)} backgroundColor='#ff6f61'/>
    </div>
  )
}
const Bar = (props) => {
  return (
    <div style={{background: props.backgroundColor, margin:'10px', width:'50px', height:props.height }} />
  )
}

export default App;
