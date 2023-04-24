const bookList = document.getElementById('book-list');
let books = [];
if (localStorage.getItem('addBook') !== null) {
    const json = localStorage.getItem('addBook');
    books = JSON.parse(json );
  } ;

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click',addBook);
function addBook(){
    const bookTitle =document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    books.push ({"title": bookTitle, "author": bookAuthor});
    localStorage.setItem('addBook', JSON.stringify(books));
    updateList(books.length-1);
}

function updateList(init){
    for(let i=init; i < books.length; i += 1){
        bookList.innerHTML +=`
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
updateList(0);

function removeBook(bookNo){
        books.splice(bookNo, 1);
        localStorage.setItem('addBook', JSON.stringify(books));
        bookList.innerHTML="";
        updateList(0);
}
