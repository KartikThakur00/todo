import React from 'react';
import Header from './components/Header';
import TodoElement from './components/TodoElements';
import './App.css';

function App() {

  return (
    <div className="app">
      <Header/>
      <TodoElement/>
    </div>
  );
}

export default App;
