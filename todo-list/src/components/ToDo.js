import React from 'react';


const Todo = props => {
  console.log('ToDo.js', props)
  return(
    <div 
      className={`item${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.clickHandler(props.todo.id)}>
      {props.todo.item}
    </div>
  )
} 

export default Todo;