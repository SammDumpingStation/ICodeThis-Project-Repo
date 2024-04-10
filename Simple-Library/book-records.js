const studentStorage = JSON.parse(localStorage.getItem("book")) || [];

function studentStore() {
  localStorage.setItem("book", JSON.stringify(studentStorage));
}

renderStudents();

const bookName = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  bookInformation();
  bookName.value = "";
  bookAuthor.value = "";
});

resetButton.addEventListener("click", () => {
  studentStorage.length = 0;
  localStorage.removeItem("book");
  renderStudents();
});

seeRecordButton.addEventListener("click", () => {
  if (
    hiddenRecords.style.display === "none" ||
    hiddenRecords.style.display === ""
  ) {
    hiddenRecords.style.display = "block";
  } else {
    hiddenRecords.style.display = "none";
  }
});

function bookInformation() {
  const fname = bookName.value;
  const lname = bookAuthor.value;
  const studentString = `<div class="records"><p>${fname}</p><p>${lname}</p></div>`;
  studentStorage.unshift(studentString);
  studentStore();
  renderStudents();
}

function renderStudents() {
  let renderHTML = "";
  studentStorage.forEach((book) => {
    const bookHTML = book;
    renderHTML += bookHTML;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
}
