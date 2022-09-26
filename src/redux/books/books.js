export const ADD_BOOK = 'bookstore/books/ADD_BOOKADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        name: action.name,
        author: action.author,
        completed: false,
      },
    ];

    case REMOVE_BOOK:
      return state.filter((book) => book.name !== action.name);
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  name: book.name,
  author: book.author,
});

export const removeBook = (name) => ({
  type: REMOVE_BOOK,
  name,
});
