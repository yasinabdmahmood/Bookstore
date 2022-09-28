// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getBooks } from '../../redux/books/books';
// import { v4 as uuidv4 } from 'uuid';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import style from './BookList.module.css';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className={style['book-list-wrapper']}>
      <ul className={style['book-list']}>
        {books && books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
          </li>
        ))}
      </ul>
      <AddBook />

    </div>
  );
}

export default BookList;
