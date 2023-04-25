// import { ADD_TODO, TOGGLE_TODO_STATUS } from "../../redux/constants"
// const initState = [
//     {
//         id: 1,
//         name: 'Learn Redux',
//         completed: false,
//         priority: 'Medium'
//     },
//     {
//         id: 2,
//         name: 'Learn NodeJS',
//         completed: true,
//         priority: 'High'
//     },
//     {
//         id: 3,
//         name: 'Learn Yoga',
//         completed: false,
//         priority: 'Medium'
//     },

// ]

// function todoListReducer(state = initState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case TOGGLE_TODO_STATUS:
//             return state.map(todo => todo.id === action.payload
//                 ? {...todo, completed: !todo.completed}
//                 : todo
//             )
//         default:
//             return state
//     }
// }

// export { initState }
// export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'todoLists',
    initialState : [
        {
            id: 1,
            name: 'Learn Redux',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 2,
            name: 'Learn NodeJS',
            completed: true,
            priority: 'High'
        },
        {
            id: 3,
            name: 'Learn Yoga',
            completed: false,
            priority: 'Medium'
        },
    
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
})