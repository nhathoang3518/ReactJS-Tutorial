// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useRef, useEffect } from "react";
function App() {
  const [name, setName] = useState();
  const [counter, setCounter] = useState(0);
  const inputEl = useRef();
  const previousCounterRef = useRef();
  console.log(inputEl);
  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };
  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  return (
    <div className="App">
      <div>
        <input
          ref={inputEl}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
        <div>My name is {name}</div>
        <div>
          <h1>Random Counter : {counter}</h1>
          {typeof previousCounterRef.current !== "undefined" && (
            <h2>Previous Counter : {previousCounterRef.current}</h2>
          )}
          <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
            Ramdom
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
