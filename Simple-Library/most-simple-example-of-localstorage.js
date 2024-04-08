const studentStorage = JSON.parse(localStorage.getItem("student")) || [];

function studentStore() {
  localStorage.setItem("student", JSON.stringify(studentStorage));
}

renderRecord();
clickEventListener(".see-button", () => studentName());
clickEventListener(".reset-button", () => reset());

function studentName() {
  let fname = document.querySelector(".student-fname").value;
  let lname = document.querySelector(".student-lname").value;
  let htmlText = "";
  htmlText = `<div class="records"><p>${fname}</p><p>${lname}</p></div>`;
  studentStorage.unshift(htmlText);
  studentStore();
  renderRecord();
}

function clickEventListener(elementClass, usedFunction) {
  document
    .querySelector(elementClass)
    .addEventListener("click", () => usedFunction());
}

function reset() {
  studentStorage.length = 0;
  localStorage.removeItem("student");
  renderRecord();
}

function renderRecord() {
  let recordHTML = "";
  studentStorage.forEach((student) => {
    let recordString = student;
    recordHTML += recordString;
    console.log(recordHTML);
  });
  document.querySelector(".records-container").innerHTML = recordHTML;
}
