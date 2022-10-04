const CHECK_STATUS = 'REACT-BOOKSTORE/src/redux/categories/CHECK_STATUS';

// Action
const statusAction = () => ({
  type: CHECK_STATUS,
});
// Reducer
const categoryActionReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default { categoryActionReducer, statusAction };
