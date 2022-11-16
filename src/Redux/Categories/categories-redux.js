const CHECK_STATUS = 'bookstore/src/redux/categories/checkStatus';

// action to check the status
const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: test,
});

// create a reducer
const initialStatus = (state = '', action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default { checkStatus, initialStatus };
