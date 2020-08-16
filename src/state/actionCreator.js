import * as types from './actionTypes'
import uuid from 'uuid'

//STEP-7 MAKE ACTIONS CREATORS THE COMPONENTS CAN USE DIRECTLY/DESIGN ACTION CREATOR FUNCTION
export function toggleTodo(id){
    return{
        type: types.TOGGLE_TODO,
        payload:{
        id:id
        }
    }
}
export function inputChange({task}){
   return{
       type:types.INPUT_CHANGE,
       payload:{
           task
       }
   }
}
export function addTodo({task}){
    return{
        type:types.ADD_TODO,
        payload:{ // a new toto task fro the reducer
            id:uuid(),
            task,
            completed: false,
        }
    }
}

export function clearCompleted(){
    return{
        type: types.CLEAR_COMPLETED
    };
    
}