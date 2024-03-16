import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchInputSelector = (state) => state.filters.searchInput;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchInputSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  (todoList, searchInput, statusFilter, prioritiesFilter) => {
    const isCompleted = statusFilter === 'Completed' ? true : false;
    const hasPriorities = prioritiesFilter.length ? true : false;
    return todoList.filter((todo) => {
      if (statusFilter === 'All')
        return hasPriorities
          ? todo.name.includes(searchInput) &&
              prioritiesFilter.includes(todo.priority)
          : todo.name.includes(searchInput);
      return (
        todo.name.includes(searchInput) &&
        isCompleted === todo.completed &&
        (hasPriorities ? prioritiesFilter.includes(todo.priority) : true)
      );
    });
  }
);

// export const todoListSelector = (state) => {
//   return state.todoList.filter((todo) =>
//     todo.name.includes(state.filters.searchInput)
//   );
// };
