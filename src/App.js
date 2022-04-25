
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  // const inputHandler = (event) = () => {
  //   setInputText(event.target.value)
  // }

  const createHandler = (event) = () => {
    // event.preventDefault()
    // setTodos([...todos, inputText])
    let addTodo = ([...todos, inputText])
    // addTodo.push(inputText.value)
    setTodos(addTodo)
    setInputText("")
  }

  const deleteHandler = (index) => {
    let storedTodos = [...todos]
    storedTodos.splice(index, 1)
    setTodos(storedTodos)
  }

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <h1>Add Todo Item</h1>
      <input 
      className='InputBox'
      type="text"
      value={inputText} 
      onChange={(event) => {
        setInputText(event.target.value)}}
      // onChange={createHandler}
      ></input>
      <button onClick={createHandler}>Create Todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteHandler={deleteHandler()}/>
      ))}
    </div>
  );
  
}

const Todo = (todo, index, deleteHandler) => {
  return (
    <div>
      <h2>{todo}</h2> 
      <button onClick={() => deleteHandler(index)}>Delete</button>
    </div>
  )
}

// I don't understand!
// need to go back to the start, start over.

export default App;
