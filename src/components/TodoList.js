import React from 'react'
import TodoElement from './TodoElement'

export default function TodoList() {
  return (
    <div className='todo-list'>
            <TodoElement/>
            <TodoElement/>
            <TodoElement/>
            <TodoElement/><TodoElement/><TodoElement/>
    </div>
  )
}
