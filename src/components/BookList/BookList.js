import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import style from './BookList.module.css';

function BookList() {
  const initialBooks = [
    {
      title: 'Rich dad poor dad',
      author: 'Robert Kiyosaki',
    },
    {
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen Covey',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
    },
  ];
  const [books] = useState(initialBooks);
  return (
    <div className={style['book-list-wrapper']}>
      <ul className={style['book-list']}>
        {books.map((book) => (
          <li key={uuidv4}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;
