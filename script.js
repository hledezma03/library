//Array to save the book objects
const myLibrary = [];


//Constructor for the book object
function Book(title, author, pages, isRead) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.isRead = isRead
};

//Function to add the new books to the library array
function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
};

// Function to update the button display based on the read status
function updateButtonDisplay(button, isRead) {
  button.textContent = isRead ? 'Read' : 'Not Read'; 
  button.style.backgroundColor = isRead ? 'green' : 'red'; 
}



//Function to show the book cards on the display
function displayBooks() {
  bookContainer.innerHTML = '';
  myLibrary.forEach((book, index) => {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.dataset.index = index;
    bookCard.innerHTML = `
      <div class="delete-button-container">
        <button class="delete-book">X</button>
      </div>
      <div class="info-container">
        <h2 class="book-title-show">${book.title}</h2>
        <p class="book-author-show">${book.author}</p>
        <p class="pages-show">${book.pages} pages</p>
        <button class="read" style="background-color: ${book.isRead ? 'green' : 'red'}">${book.isRead ? 'Read' : 'Not Read'}</button>
      </div>
    `;
    bookContainer.appendChild(bookCard);
  });
};

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read; // Toggle the read status
};

const dialog = document.querySelector('dialog');
const addBook = document.querySelector('#add-book');
const closeForm = document.querySelector('.close-dialog');
const submitForm = document.querySelector('.submit-dialog');
const bookContainer = document.querySelector('#books-container');
const form = document.querySelector('form');

//Open form to add book
addBook.addEventListener('click', () => {
  dialog.showModal();
});

//Close form to add book
closeForm.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close();
});


//Event to add the book using the form data
submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#isRead').checked;


  if (!title || !author || !pages) {
    alert('Please fill out all the fields')
    return;
  };

  addBookToLibrary(title,author,pages,isRead);
  form.reset();
  dialog.close();
  displayBooks();
});


document.addEventListener('click', function(e) {
  if (!e.target.matches('.delete-book')) return;
  myLibrary.splice(e.target.parentElement.parentElement.dataset.index, 1);
  displayBooks();
});

// Event listener for toggle read status button
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('read')) {
    const index = e.target.parentElement.parentElement.dataset.index;
    myLibrary[index].isRead = !myLibrary[index].isRead; 
    updateButtonDisplay(e.target, myLibrary[index].isRead); 
  }
});





