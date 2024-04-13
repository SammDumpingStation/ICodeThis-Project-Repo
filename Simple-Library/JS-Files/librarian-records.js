const librarianStorage = JSON.parse(localStorage.getItem("librarian")) || [];

function librarianStore() {
  localStorage.setItem("librarian", JSON.stringify(librarianStorage));
}

renderLibrarians();

const librarianFname = document.querySelector(".librarian-fname");
const librarianLname = document.querySelector(".librarian-lname");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  storingLibrarianInfo();
  librarianFname.value = "";
  librarianLname.value = "";
});

resetButton.addEventListener("click", () => {
  librarianStorage.length = 0;
  localStorage.removeItem("librarian");
  renderLibrarians();
});

seeRecordButton.addEventListener("click", () => {
  if (
    hiddenRecords.style.display === "none" ||
    hiddenRecords.style.display === ""
  ) {
    hiddenRecords.style.display = "block";
    seeRecordButton.innerHTML = "Hide Record";
  } else {
    hiddenRecords.style.display = "none";
    seeRecordButton.innerHTML = "See Books";
  }
});

function storingLibrarianInfo() {
  const fname = librarianFname.value;
  const lname = librarianLname.value;
  const infoHTML = `<div class="records"><p>${fname}</p><p>${lname}</p></div>`;
  librarianStorage.unshift(infoHTML);
  librarianStore();
  renderLibrarians();
};

function renderLibrarians() {
  let renderLibrarianHTML = "";
  librarianStorage.forEach((librarian) => {
    let librarianHTML = librarian;
    renderLibrarianHTML += librarianHTML;
  });
  document.querySelector(".records-container").innerHTML = renderLibrarianHTML;
};
