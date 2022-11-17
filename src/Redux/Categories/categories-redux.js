const CHECK_STATUS = 'bookstore/src/redux/categories/checkStatus';

export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);

export default function categoriesRed(state = [], action) {
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  }
  return state;
}
