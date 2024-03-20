import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../components/Filters/FiltersSlice';
import todoListSlice from '../components/TodoList/TodoListSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    todoList: todoListSlice,
  },
});

export default store;
