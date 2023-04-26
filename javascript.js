class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.books = [];

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => this.addBook());
  }

  updateList(init) {
    for (let i = init; i < this.books.length; i += 1) {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML += `
        <span>"${this.books[i].title}" by 
        ${this.books[i].author}</span>
        <button onclick="myBooks.removeBook(${i})">Remove</button>
        `;
      bookDiv.classList.add('collection');
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
    if (bookTitle === '' || bookAuthor === '') {
      return;
    }
    const newBook = { title: bookTitle, author: bookAuthor };
    this.books.push(newBook);
    localStorage.setItem('addBook', JSON.stringify(this.books));
    this.updateList(this.books.length - 1);
  }
}

const myBooks = new BookList();

if (localStorage.getItem('addBook') !== null) {
  const json = localStorage.getItem('addBook');
  myBooks.books = JSON.parse(json);
  myBooks.updateList(0);
}

const list = document.getElementById('list');
const add_new = document.getElementById('add-new');
const contact = document.getElementById('contact');
const list_section = document.getElementById('list-section');
const add_section = document.getElementById('add-section');
const contact_section = document.getElementById('contact-section');

//add event listner

list.addEventListener('click',()=>{
  list_section.style.display = 'flex';
  add_section.style.display ='none';
  contact_section.style.display='none';
});

add_new.addEventListener('click',()=>{
  list_section.style.display = 'none';
  add_section.style.display ='flex';
  contact_section.style.display='none';
});

contact.addEventListener('click',()=>{
  list_section.style.display = 'none';
  add_section.style.display ='none';
  contact_section.style.display='flex';
});