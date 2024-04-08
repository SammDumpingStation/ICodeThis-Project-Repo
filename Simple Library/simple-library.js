let studentStorage = JSON.parse(localStorage.getItem("student")) || {
  'First Name': '',
  'Last Name': ''
};
let librarianStorage = JSON.parse(localStorage.getItem("librarian")) || {
  'Lib First Name':'',
  'Lib Last Name': ''
};
let bookStorage = JSON.parse(localStorage.getItem("book")) || {
  'Book': '',
  'Author': ''
};

let studentStore = localStorage.setItem(
  "student",
  JSON.stringify(studentStorage)
);
let librarianStore = localStorage.setItem(
  "librarian",
  JSON.stringify(librarianStorage)
);
let bookStore = localStorage.setItem("book", JSON.stringify(bookStorage));

const studentFname = document.querySelector('.student-fname');
const studentLname = document.querySelector('.student-lname');
const librarianFname = document.querySelector(".librarian-fname");
const librarianLname = document.querySelector(".librarian-lname");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");


