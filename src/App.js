
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])


  const inputHandler = (Event) = () => {
    setInputText(Event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <h1>Add Todo Item</h1>
      <input className='InputBox' onChange={inputHandler}></input>
      <button>Create Todo</button>


    </div>
  );
}

export default App;
