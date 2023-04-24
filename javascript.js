const bookList = document.getElementById('book-list');
let books = [];
function updateList(init) {
  for (let i = init; i < books.length; i += 1) {
    bookList.innerHTML += `
          <div>
          <span>${books[i].title}</span>
          <br>
          <span>${books[i].author}</span>
          <br>
          <button onclick="removeBook(${i})">Remove</button>
          <br>
          </div>
          <hr>
          `;
  }
}
function removeBook(bookNo) {
  if (bookNo < 0) { return; }
  books.splice(bookNo, 1);
  localStorage.setItem('addBook', JSON.stringify(books));
  bookList.innerHTML = '';
  updateList(0);
}
removeBook(-1);
function addBook() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  books.push({ title: bookTitle, author: bookAuthor });
  localStorage.setItem('addBook', JSON.stringify(books));
  updateList(books.length - 1);
}
if (localStorage.getItem('addBook') !== null) {
  const json = localStorage.getItem('addBook');
  books = JSON.parse(json);
}

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addBook);

updateList(0);
