import React from 'react';
import './App.css';

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
    // UmArray.push(textName)
    setOneArray([...OneArray, { id: Math.floor(Math.random() * 999), name: textName }])
  }
  const handleDestroy = (id) => {
    // const index = UmArray.indexOf(items)
    // if (index !== -1) {
    //   const a = UmArray.splice(index, 1);
    //   setUmArray(a)
    // }
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

    // setOneArray([...OneArray, id, update: textName ])
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
          <button type="submit" >Adicionar Item</button>
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
    </div>

  );
};

export default App;