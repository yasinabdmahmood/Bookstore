import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    completed: false,
    title: 'Rich dad poor dad',
    author: 'Robert Kiyosaki',
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Atomic Habits',
    author: 'James Clear',
  },
];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        id: action.id,
        title: action.title,
        author: action.author,
        completed: false,
      },
    ];

    case REMOVE_BOOK:
      return state.filter((book) => book.name !== action.id);
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  id: book.id,
  title: book.title,
  author: book.author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
