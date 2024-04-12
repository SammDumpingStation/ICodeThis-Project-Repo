const bookStorage = JSON.parse(localStorage.getItem("book")) || [];

function bookStore() {
  localStorage.setItem("book", JSON.stringify(bookStorage));
}

renderBooks();

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
  bookStorage.length = 0;
  localStorage.removeItem("book");
  renderBooks();
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
  const bName = bookName.value;
  const bAuthor = bookAuthor.value;
  const bookString = `<div class="records"><p>${bName}</p><p>${bAuthor}</p></div>`;
  bookStorage.unshift(bookString);
  bookStore();
  renderBooks();
}

function renderBooks() {
  let renderHTML = "";
  bookStorage.forEach((book) => {
    const bookHTML = book;
    renderHTML += bookHTML;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
}
