import React from "react"

export default function Header(props) {
  return (
    <div className='todo-text-input'>
      <input
        name="title"
        type="text"
        placeholder='Title'
        onChange={props.handler}
        value={props.tT}
         />
      <textarea
        name='content'
        placeholder='Take a note...'
        spellCheck="false"
        onChange={props.handler}
        value={props.tD}
        ></textarea>
      <button onClick={props.addHandler}>+</button>
    </div>
  )
}