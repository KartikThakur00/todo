import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoElement from './components/TodoElement';
import { nanoid } from 'nanoid';
import './App.css';

function App() {

  const [text, setText] = useState({
    title: "",
    content: ""
  })

  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) ||
    [{
      id: nanoid(),
      titleData: "Demo element",
      contentData: "this is a demo element"
    },{
      id: nanoid(),
      titleData: "Demo element",
      contentData: "this is a demo element"
    }])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
    console.log("useEffect running")
  }, [todo])

  function handleInputChange(e) {
    const { name, value } = e.target
    setText(prevText => ({
      ...prevText,
      [name]: value
    }))
  }

  function handleAdd() {
    setTodo(prevTodo => {
      const arr = [{
        id: nanoid(),
        titleData: text.title,
        contentData: text.content
      }, ...prevTodo]
      return arr
    })
    setText({
      title: "",
      content: ""
    })
  }

  function handleDelete(todoId) {
    console.log(todoId)
    setTodo(prevTodo => (prevTodo.filter(todo => todo.id !== todoId)))
  }

  const todoList = todo.map(x => (
    <TodoElement key={x.id} id={x.id} t={x.titleData} c={x.contentData} deleteHandler={() => handleDelete(x.id)} />
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
