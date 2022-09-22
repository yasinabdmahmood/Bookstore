import style from './AddBook.module.css';

function AddBook() {
  return (
    <div>
      <h3>Add new book</h3>
      <form className={style.form} action="/action.php">
        <input type="text" id="title" value="Mike" />
        <input type="text" id="author" value="Walker" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default AddBook;
