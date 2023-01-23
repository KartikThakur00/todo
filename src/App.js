import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoElement from './components/TodoElement';
import './App.css';

function App() {

  const [text, setText] = useState({
    title: "",
    content: ""
  })
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) ||
    [{
      titleData: "Demo element",
      contentData: "this is a demo element"
    }])
  console.log("hello")

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
    console.log("useEffect running")
  },[todo])

  function handleInputChange(e) {
    const { name, value } = e.target
    setText(prevText => ({
      ...prevText,
      [name]: value
    }))
  }

  function handleAdd() {
    setTodo(prevTodo => {
      const arr=[{
        titleData: text.title,
        contentData: text.content
      },...prevTodo]
      return arr
    })
    setText({
      title: "",
      content: ""
    })
  }
  const todoList = todo.map(x => (
    <TodoElement t={x.titleData} c={x.contentData} />
  ))
  console.log(todo)
  return (
    <div className="app">
      <Header
        handler={handleInputChange}
        addHandler={handleAdd}
        tT={text.title}
        tD={text.content}
      />
      <div className='todo-list'>
        {todoList}
      </div>
    </div>
  );
}

export default App;
