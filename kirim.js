const scriptURL = "https://script.google.com/macros/s/AKfycbx57A3oPz_GHgx21oIWycnOnlFHQdMWWZppXe_eFJY5r1hbWRIg0ruVoJ_C-iOPWmHL/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btnLoading = document.querySelector(".btn-loading");
  const btnkirim = document.querySelector(".btn-kirim");
  const alertKirim = document.querySelector(".alert-kirim");

  btnkirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnkirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      alertKirim.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
