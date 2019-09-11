import React from 'react'
import Todo from './ToDo.js'


const TodoList = props => {
  console.log("todoList.js", props)
  return(
    <div>
      {props.todo.map(task => (
        <Todo key={task.id} todo={task} clickHandler={props.clickHandler}/>
      ))}
    </div>
  );
};


export default TodoList;