import { createSelector } from 'reselect'

export const todoListSelector = (state) => state.todoLists
export const filterStatusSelector = (state) => state.filters.status
export const searchTextSelector = (state) => {
    return state.filters.search
}
export const priorityFilterSelector = (state) => state.filters.priority

export const remainingTodoListSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    priorityFilterSelector,
    searchTextSelector,
    (todoLists, status, priorities, searchText) => {
        return todoLists.filter((todo) => {
            if (status === 'All') {
                return (
                    priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText)
                )
            }
            return (
                (todo.name.includes(searchText) && 
                (
                    status === 'Completed'
                    ? todo.completed
                    : !todo.completed
                )) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            )
        })
    }
)