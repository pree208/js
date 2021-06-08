//book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor

function UI() { }

//add book to the list
UI.prototype.addBookList = function (book) {
  const list = document.getElementById('book-list');

  //create tr element
  const row = document.createElement('tr');
  //console.log(row);

  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}
//show alert
UI.prototype.showAlert = function (message, className) {
  //create div
  const div = document.createElement('div');
  //add class
  div.className = `alert ${className} `;
  //add text
  div.appendChild(document.createTextNode(message));
  //select parent
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');
  //insert before form
  container.insertBefore(div, form);
  //timeout after 3s
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000)
}

//dete book

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

//clear fields

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//EVENT LISTENERS
//event listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  //GET FORM VALUES
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value
  console.log(title, author, isbn);

  //INSTANTIATE BOOK
  const book = new Book(title, author, isbn);

  //console.log(book);

  //INSTANTIATE UI
  const ui = new UI();
  console.log(ui);

  //validate
  if (title === '' || author === '' || isbn === '') {
    //ERROR ALERT
    ui.showAlert('Please fill in all the fields', 'error');


  } else {
    //add book to list
    ui.addBookList(book);
    //alert success
    ui.showAlert('Book added', 'success');
    //console.log(ui);

    //clear fields
    ui.clearFields();
  }



  e.preventDefault();

})

//event listener for delete book

document.querySelector('#book-list').addEventListener('click', function (e) {
  //INSTANTIATE UI
  const ui = new UI();

  ui.deleteBook(e.target);
  //show alert
  ui.showAlert('Book deleted', 'success');
  e.preventDefault();
})


