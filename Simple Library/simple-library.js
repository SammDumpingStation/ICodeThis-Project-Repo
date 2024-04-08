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
