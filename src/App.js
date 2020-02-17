import React from 'react';

import './App.css';

function App() {
  const [state, setState] = React.useState(0)
  const [textName, setTextName] = React.useState("")
  const [UmArray, setUmArray] = React.useState([])
  // console.log(UmArray)

  const handleSubmit = (event) => {
    event.preventDefault();
    // UmArray.push(textName)
    setUmArray([...UmArray,textName])
  }

  return (
    <div className="App">
      <button onClick={() => setState(state + 1)}>increment</button>
      <button onClick={() => setState(state - 1)}>decrement</button>
      <h1>{state}</h1>

      <form class="form" onSubmit={handleSubmit}>
        <h1> Fill out the form below </h1>
        <div class="field">
          <label> Nome </label>
          <input type="text" id="name" name="name" placeholder="DIGITE O NOME" required onChange={(event) => {
            // console.log(event.target.value)
            setTextName(event.target.value)
          }} ></input>
          <button type="submit" >Adicionar Item</button>
        </div>
      </form>
      <h2>{UmArray.map(items => <li>{items}</li>)}</h2>
    </div>
  );
};

export default App;