import { combineReducers } from 'redux'

import todoListReducer from "../components/TodoList/todoListSlice";
import filtersReducer from "../components/Filters/filtersSlice";

// function rootReducer(state = {} , action) {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoLists: todoListReducer(state.todoLists, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoLists: todoListReducer
})

export default rootReducer;