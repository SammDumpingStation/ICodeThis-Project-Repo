const studentStorage = JSON.parse(localStorage.getItem("student")) || [];

function studentStore() {
  localStorage.setItem("student", JSON.stringify(studentStorage));
}

renderStudent();

const studentFname = document.querySelector(".student-fname");
const studentLname = document.querySelector(".student-lname");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  studentName();
  studentFname.value = "";
  studentLname.value = "";
});

resetButton.addEventListener("click", () => {
  studentStorage.length = 0;
  localStorage.removeItem("student");
  renderStudent();
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

function studentName() {
  const fname = studentFname.value;
  const lname = studentLname.value;
  const studentString = `<div class="records"><p>${fname}</p><p>${lname}</p></div>`;
  studentStorage.unshift(studentString);
  studentStore();
  renderStudent();
};

function renderStudent() {
  let renderHTML = "";
  studentStorage.forEach((student) => {
    const studentHTML = student;
    renderHTML += studentHTML;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
};
