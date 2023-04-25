import {
    ADD_TODO,
    SET_SEARCH_FILTER,
    STATUS_FILTER_CHANGE,
    PRIORITY_FILTER_CHANGE,
    TOGGLE_TODO_STATUS
} from "./constants";

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const setSearchFilter = payload => ({
    type: SET_SEARCH_FILTER,
    payload
})

export const statusFilterChange = payload => ({
    type: STATUS_FILTER_CHANGE,
    payload
})

export const priorityFilterChange = payload => ({
    type: PRIORITY_FILTER_CHANGE,
    payload
})

export const toggleTodoStatus = payload => ({
    type: TOGGLE_TODO_STATUS,
    payload
})