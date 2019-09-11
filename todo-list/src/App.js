import React, { useReducer } from 'react';
import ReactDom from 'react-dom';
//import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

//reducer
import { initialState, todoReducer } from './reducers/todoReducer'


function App() {
 const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList todo={state.todoArr} dispatch={dispatch} />
      <TodoForm  />
    </div>
  );
}

export default App;
