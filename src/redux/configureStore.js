import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catagoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: catagoriesReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['books/getAllBooks//fulfilled', 'books/removeBook//fulfilled'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
  }),
});

export default store;
