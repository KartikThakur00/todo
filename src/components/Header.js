import React from 'react'
import TodoList from './TodoList'
 
export default function Header() {
    
  return (
    <div className='todo-text-input'>
          {<input name="title" type="text"  placeholder='Title'/>}
            <textarea name='content' placeholder='Take a note...' spellCheck="false"></textarea>
            <button >+</button>
    </div>
  )
}