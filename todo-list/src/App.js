import React, { useReducer } from 'react';
import ReactDom from 'react-dom';
//import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

//reducer
import { initialState, titleReducer } from './reducers/todoReducer.js/index.js'


function App() {
 const [state, dispatch] = useReducer(titleReducer, initialState);

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm  />
    </div>
  );
}

export default App;
