function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    this.showBook = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`)
    }
};
const book1 = new Book('4 hours week', "Tim Ferris", 287, "read");



function Player(name,marker) {
    this.name = name,
    this.marker = marker
    this.sayHello = function() {
        console.log(`Hello, ${this.name}`)
    }
};

const player1 = new Player('Steve','X');
const player2 = new Player('Mike', 'O');


// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// // "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });