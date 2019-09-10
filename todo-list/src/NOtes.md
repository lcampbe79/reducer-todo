import React from 'react';

class TodoFormList extends React.Component  {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }
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
  clickHandler = id => {
    setState({
      todo: state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }
  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed
      })
    })
  }

  addTask = taskName => {
    const newTask ={
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  }

  render() {
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
}

export default TodoFormList;