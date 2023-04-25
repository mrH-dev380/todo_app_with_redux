import { createSelector } from '@reduxjs/toolkit'
// Redux toolkit giúp các component không bị render lại 1 cách không cần thiết (không cần dùng useCallback hay useMemo)

export const todoListSelector = (state) => state.todoList
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