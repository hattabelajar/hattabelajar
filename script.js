const reset = document.querySelector("#reset");
const html = document.querySelector("html");

reset.addEventListener("click", (event) => {
  html.innerHTML = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Semua Telah direset</h1>
  </body>
</html>
  `;
  let newScript = document.createElement("script");
  newScript.setAttribute("src", "script2.js");
  html.append(newScript);
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const isiSearch = document.querySelector("#text-melayang");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    const tulisanSearch = document.querySelector("#isi-search");
    isiSearch.innerHTML = tulisanSearch.value;
    toastBootstrap.show();
  });
}
console.log(toastTrigger);
console.log(toastLiveExample);
