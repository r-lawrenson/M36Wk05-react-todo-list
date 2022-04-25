
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  // take input from user to store as a string
  const inputHandler = (Event) = () => {
    setInputText(Event.target.value)
  }

  const createHandler = (Event) = () => {
    Event.preventDefault()
    // set todo value to equal the value of the input text
    setTodos([...todos, inputText])
    // clear the value of inputText
    setInputText("")
  }

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <h1>Add Todo Item</h1>
      <input className='InputBox' onChange={inputHandler}></input>
      <button onClick={createHandler}>Create Todo</button>
      


    </div>
  );
}

export default App;
