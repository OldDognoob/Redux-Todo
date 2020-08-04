import React from 'react';
import { connect } from 'react-redux';
import {addTodo,toggleTodo,inputChange,clearCompleted} from './state/actionCreator'

import './App.css';


function App({
  // A data from redux state
  formValues,
  todos,
  //B callbacks to change state(action creators)
  inputChange,
  toggleTodo,
  addTodo,
  clearCompleted,
  //C props injected by the parent component
}) {
  //Event Listeners
const onSubmit=event=>{
  event.preventDefault()
  addTodo({
    task: formValues.task
  })
}
const onChange=event=>{
  inputChange({
    task:event.target.value
  })


}
const onAddTodo =event => {
  addTodo(formValues)
}
const onClearCompleted = e => {
  clearCompleted()
}
const onToggleTodo = id => event =>{
  toggleTodo(id)
}
return(
  <div className="App">
    <h1>Add a new todo</h1>
    <form>
      <input onChange={onChange} name='task' value={formValues.task}></input>
      
      {console.log(formValues)}
      <button type='button' onClick={onSubmit}>Add</button>
      <button type='button' onClick={onClearCompleted}>Clear</button>
    </form>
    {todos.map(todo => <p onClick={onToggleTodo(todo.id)}>{todo.task}</p>)}
  </div>
)
}

//STEP-8 USE connect FROM REACT-REDUX TO WRAP OUR COMPONENT
function mapStateToProps(state){
  return{
    formValues: state.formValues,
    todos:state.todos
  };
}
export default connect(mapStateToProps, {
  inputChange,
  addTodo,
  toggleTodo,
  clearCompleted
})(App);