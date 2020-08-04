import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {formReducer, todoReducer} from './state/reducer';
import './index.css';
import App from './App';



//STEP 1 Design Application State
 const initialState= {
    formValues: {
        todoList:[],
        task:"",
    },

    todos: [
        {
            id: 3892987589,
            item: 'Learn about reducers',
            completed: false
        },
        {
            id: 234234234,
            item: 'Learn about redux',
            completed: false
        },
    ]
}

//STEP-4 Use combineReducers FROM REDUX to MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
    formValues:formReducer,
    todos: todoReducer,
})
//STEP-5 USE createStore FROM REDUX TO MAKE A STATE
const store = createStore(
    //arg 1: monster reducer
    combinedReducer,
    // null unless redux devtools is installed
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'))




