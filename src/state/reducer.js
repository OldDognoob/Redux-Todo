import * as types from "./actionTypes";

//STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE

const initialStateForm = { todoList: [], task: "" };
export function formReducer(state = initialStateForm, action) {
 
  switch (action.type) {
    case types.INPUT_CHANGE:
        return {
            ...state,
            task:action.payload.task
        }
    case types.ADD_TODO:
      return initialStateForm;
    default:
      return state;
  }
}

const initialStateTodos = [];
export function todoReducer(state = initialStateTodos, action) {
  
  switch (action.type) {
    case types.ADD_TODO:
        console.log(state)
      return [
            ...state,
           action.payload
         ]
         
      case types.TOGGLE_TODO:
        const id = action.payload.id
        return state.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        // return {
        //     ...state,
        //     todos: state.todos.map(todo =>
        //       todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        //     )
        //   };

    case types.CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);     
        default:
            return state;
 } }

