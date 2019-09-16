import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';

function TodoFormList() {
  const [todo, setTodo] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  console.log('TodoForm.js: state', state)
  const handleChanges = event => {
    setTodo({ [event.target.name]: event.target.value});
  }
  
  const submitItem = event => {
    event.preventDefault();
    //addTask(task);
    setTodo({ todo: '' })
  }

  return(
    <form onSubmit={submitItem}>
      <input 
        type='text'
        value={todo}
        name='todo'
        placeholder='Add todo item'
        onChange={handleChanges}
      />
      <button >Add Todo</button>
      <button onClick={() => dispatch ({ type: 'TOGGLE_EDITING'
        //clearCompleted();
      })}>Clear Completed</button>
    </form>
  )
  
}

export default TodoFormList;