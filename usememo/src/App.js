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
// import React, { useState, useMemo } from "react";
// function App() {
//   const [counter, setCounter] = useState(1);
//   const result = useMemo(() => {
//     return Factorial(counter);
//   }, [counter]);
//   const [name, setName] = useState("");

//   return (
//     <div className="App">
//       <h1>
//         Factorial of {counter} is: <span>{result}</span>
//       </h1>
//       <div>
//         <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//         <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       </div>
//       <hr></hr>
//       <div>
//         <div>
//           <label>Enter name</label>
//         </div>
//         <input
//           type="text"
//           placeholder="enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         {/* <p>{`My name id ${name}`}</p> */}
//         <DisplayName name={name} />
//       </div>
//     </div>
//   );
// }
// const DisplayName = React.memo(({ name }) => {
//   console.log("rendered");
//   <p>{`My name id ${name}`}</p>;
// });
// function Factorial(n) {
//   let i = 0;
//   while (i < 1000) i++;
//   if (n < 0) {
//     return -1;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   return n * Factorial(n - 1);
// }
// export default App;
