const input = document.querySelector(".input");
const submit = document.querySelector(".arrow-form");
const dialog = document.querySelector(".dialog-pop-up");
const quitDialog = document.querySelector(".close-dialog");
const showEmail = document.querySelector(".show-email");
const emailArray = [];

submit.addEventListener("click", () => {
  let value = input.value;
  console.log(value);
  emailArray.push(value);
  dialog.showModal();
});

showEmail.addEventListener("click", () => {
  emailArray.forEach((emailArray) => {
    console.log(emailArray);
  });
});

quitDialog.addEventListener("click", () => {
  dialog.close();
});
