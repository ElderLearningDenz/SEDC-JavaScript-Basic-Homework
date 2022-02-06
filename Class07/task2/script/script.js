let myBooks = new Object();

let bookName = prompt("What is the name of the book?");
myBooks.bookName = bookName;
let bookAuthor = prompt("Who is the author of this book?");
myBooks.bookAuthor = bookAuthor;

let readingStatus = confirm("Have you read the book");
myBooks.readingStatus = readingStatus;

myBooks.checkIf = function () {
  if (this.readingStatus == true) {
    alert(`I have already read: ${this.bookName}`);
  } else {
    alert(`I need to read: ${this.bookName}`);
  }
};

myBooks.checkIf();
