const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';

export const defaultState = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: '64%',
    chapter: '17',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    completed: '8%',
    chapter: '1',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    completed: '0%',
    chapter: 'Introduction',
  },
];

export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    completed: payload.completed,
    chapter: payload.chapter,
  }
);

export const removeBook = (payload) => (
  {
    type: REMOVE_BOOK,
    id: payload.id,
  }
);

export default function reducerBook(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          completed: action.completed,
          chapter: action.chapter,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
