import React, {useState} from 'react';

function TodoFormList() {
  const [task, setTask] = useState();
  
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitItem = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ''
    })
  }

  return(
    <form onSubmit={this.submitItem}>
      <input 
        type='text'
        value={this.state.task}
        name='task'
        onChange={this.handleChanges}
      />
      <button >Add Todo</button>
      <button onClick={(e) => {
        e.preventDefault(); 
        this.props.clearCompleted();
      }}>Clear Completed</button>
    </form>
  )
  
}

export default TodoFormList;