
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.books = [];
    if (localStorage.getItem('addBook') !== null) {
      const json = localStorage.getItem('addBook');
      this.books = JSON.parse(json);
      this.updateList(0);
    }
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => this.addBook());
  }

  updateList(init) {
    for (let i = init; i < this.books.length; i += 1) {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML += `
        <span>${this.books[i].title}</span>
        <br>
        <span>${this.books[i].author}</span>
        <br>
        <button onclick="myBooks.removeBook(${i})">Remove</button>
        <br>
        `;
      const hr = document.createElement('hr');
      bookDiv.appendChild(hr);
      this.bookList.appendChild(bookDiv);
    }
  }

  removeBook(bookNo) {
    if (bookNo < 0) { return; }
    this.books.splice(bookNo, 1);
    localStorage.setItem('addBook', JSON.stringify(this.books));
    this.bookList.innerHTML = '';
    this.updateList(0);
  }

  addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const newBook = new Book(bookTitle, bookAuthor);
    this.books.push(newBook);
    localStorage.setItem('addBook', JSON.stringify(this.books));
    this.updateList(this.books.length - 1);
  }
}

const myBooks = new BookList();
