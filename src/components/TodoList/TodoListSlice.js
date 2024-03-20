const initState = [
  { id: 1, name: 'Learn JS', completed: true, prioryty: 'Medium' },
];

const todoListSlice = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default todoListSlice;
