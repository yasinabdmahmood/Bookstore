// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import style from './BookList.module.css';

function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books)

  return (
    <div className={style['book-list-wrapper']}>
      <ul className={style['book-list']}>
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;
