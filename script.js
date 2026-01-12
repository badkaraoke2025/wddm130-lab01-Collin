const button = document.getElementById("proceedBtn");
const output = document.getElementById("opArea");

button.addEventListener("click", function () {
  let name = prompt("Enter your name:");
  let hobby = prompt("Enter your favourite hobby:");

  // Extra feature: default name if blank
  if (!name || name.trim() === "") {
    name = "Guest";
  }

  if (!hobby || hobby.trim() === "") {
    hobby = "something awesome";
  }

  output.textContent = `Hello ${name}! Your favourite hobby is ${hobby}.`;
});
