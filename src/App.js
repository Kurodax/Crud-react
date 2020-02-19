import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [textName, setTextName] = React.useState("")
  const [OneArray, setOneArray] = React.useState([
    {
      id: Math.floor(Math.random() * 999),
      name: 'Joao'
    }
  ])
  const [toggleInputAlter, setToggleInputAlter] = React.useState(false)
  const [idToggle, setIdToggle] = React.useState(0)
  const handleSubmit = (event) => {
    event.preventDefault();
    setOneArray([...OneArray, { id: Math.floor(Math.random() * 999), name: textName }])
  }
  const handleDestroy = (id) => {
    setOneArray(OneArray.filter(element => element.id !== id))
  }
  const handleUp = (id) => {
    setToggleInputAlter(!toggleInputAlter)
    setIdToggle(id)
  }
  const handleUpdate = (id) => {
    const a = OneArray.map((item) => {
      if (item.id === id) {
        const response = {
          id: id, name: textName
        };
        return response;
      }
      return item;
    });
    setOneArray(a)
  }


  return (
    <div className="App">
      <form class="form" onSubmit={handleSubmit} autoComplete="off">
        <h1> Fill out the form below </h1>
        <div class="field">
          <label> Nome </label>
          <input type="text" id="name" name="name" placeholder="DIGITE O NOME" required onChange={(event) => {
            // console.log(event.target.value)
            setTextName(event.target.value)
          }} ></input>
          <button type="submit">Adicionar Item</button>
        </div>
      </form>
      <h2>
        {
          OneArray.map((items, index) => {
            return (
              <li key={index}>
                {items.id}-{items.name}
                <button type="button" onClick={() => handleDestroy(items.id)}>Apaga Item</button>
                <button type="button" onClick={() => handleUp(items.id)}>Alterar Item</button>
                <Link to={'/profile/'+items.id+items.name}><button> IR para profile </button></Link>
                <br></br>
                <input type="text" hidden={toggleInputAlter && items.id === idToggle ? false : true} onChange={(event) =>{
                  setTextName(event.target.value)
                }}/>
                <input type="button" hidden={toggleInputAlter && items.id === idToggle ? false : true} value="alterar" onClick={()=> handleUpdate(items.id)}/>
                
              </li>
            )
          })
        }
      </h2>
      <Link to="/sobre"><button> Ir para a página sobre </button></Link>
    </div>
    
  );
};

export default App;