let studentStorage = JSON.parse(localStorage.getItem("student")) || [];
let librarianStorage = JSON.parse(localStorage.getItem("librarian")) || [];
let bookStorage = JSON.parse(localStorage.getItem("book")) || [];

function studentStore(student) {
  localStorage.setItem("student", JSON.stringify(student));
}

function librarianStore(librarian) {
  localStorage.setItem("librarian", JSON.stringify(librarian));
}

function bookStore(book) {
  localStorage.setItem("book", JSON.stringify(book));
}

let studentFname = document.querySelector(".student-fname").value;
let studentLname = document.querySelector(".student-lname").value;
let librarianFname = document.querySelector(".librarian-fname").value;
let librarianLname = document.querySelector(".librarian-lname").value;
let bookTitle = document.querySelector(".book-title").value;
let bookAuthor = document.querySelector(".book-author").value;

let studentButton = document.querySelector(".student-button");
let librarianButton = document.querySelector(".librarian-button");
let bookButton = document.querySelector(".book-button");

function storageLibrary(buttonType) {
  if (buttonType === "student") {
    studentButton.addEventListener("click", () => {

    });
  } else if (buttonType === "librarian") {
    librarianButton.addEventListener("click", () => {

    });
  } else if (buttonType === "book") {
    bookButton.addEventListener("click", () => {
    });
  }
}
