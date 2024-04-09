const studentStorage = JSON.parse(localStorage.getItem("student")) || [];

function bookStore() {
  localStorage.setItem("student", JSON.stringify(bookStorage));
}

renderBooks();

const studentFname = document.querySelector(".student-fname");
const studentLname = document.querySelector(".student-lname");
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
  localStorage.removeItem("student");
  renderBooks();
});

seeRecordButton.addEventListener("click", () => {
  if (
    hiddenRecords.style.display === "none" ||
    hiddenRecords.style.display === ""
  ) {
    hiddenRecords.style.display = "block";
    console.log("working");
  } else {
    hiddenRecords.style.display = "none";
    console.log("not");
  }
});

function bookInformation() {
  const fname = bookName.value;
  const lname = bookAuthor.value;
  const studentString = `<div class="records"><p>${fname}</p><p>${lname}</p></div>`;
  bookStorage.unshift(studentString);
  bookStore();
  renderBooks();
}

function renderBooks() {
  let renderHTML = "";
  bookStorage.forEach((student) => {
    const studentHTML = student;
    renderHTML += studentHTML;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
}
