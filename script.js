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
