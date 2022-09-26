import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import { useState } from 'react';
import style from './AddBook.module.css';
import  { useDispatch } from "react-redux";

function AddBook() {
  const dispatch = useDispatch();
  const handleClick = () =>{
    const book ={
      id: uuidv4(),
      title,
      author,
    }
    dispatch(addBook(book))
  }
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  return (
    <div>
      <h3>Add new book</h3>
      <form className={style.form} action="/action.php">
        <input 
        type="text" 
        id="title" 
        value={title} 
        placeholder='title' 
        onChange={(e)=>{setTitle(e.target.value)}} />
        <input 
        type="text" 
        id="author" 
        value={author} 
        placeholder='author'
        onChange={(e)=>{setAuthor(e.target.value)}}/>
        <input type="submit" value="Add Book" onClick={handleClick} />
      </form>
    </div>
  );
}

export default AddBook;
