export const addTodo = (payload) => {
  return {
    type: 'todoList/addTodo',
    payload,
  };
};

export const toogleStatus = (id) => {
  return {
    type: 'todoList/toogleStatus',
    payload: id,
  };
};

export const searchInputChange = (payload) => {
  return {
    type: 'filters/searchInputChange',
    payload,
  };
};

export const statusFilterChange = (payload) => {
  return {
    type: 'filters/statusFilterChange',
    payload,
  };
};

export const prioritiesFilterChange = (payload) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload,
  };
};
