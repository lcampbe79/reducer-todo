import React, {useState} from 'react';

function TodoFormList() {
  const [task, setTask] = useState();
  
  const handleChanges = event => {
    setTask({ [event.target.name]: event.target.value});
  }

  const submitItem = event => {
    event.preventDefault();
    //addTask(task);
    setTask({ task: '' })
  }

  return(
    <form onSubmit={submitItem}>
      <input 
        type='text'
        value={task}
        name='task'
        onChange={handleChanges}
      />
      <button >Add Todo</button>
      <button onClick={(e) => {
        e.preventDefault(); 
        //clearCompleted();
      }}>Clear Completed</button>
    </form>
  )
  
}

export default TodoFormList;