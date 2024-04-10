const studentStorage = JSON.parse(localStorage.getItem("student")) || [];

function studentStore() {
  localStorage.setItem("student", JSON.stringify(studentStorage));
}

renderStudents();

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
  studentStorage.length = 0;
  localStorage.removeItem("student");
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
  studentStorage.forEach((student) => {
    const studentHTML = student;
    renderHTML += studentHTML;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
}
