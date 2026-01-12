const button = document.getElementById("proceedBtn");
const output = document.getElementById("opArea");

button.addEventListener("click", function () {
  let name = prompt("Enter your name:");
  let hobby = prompt("Enter your favourite hobby:");

  if (!name || name.trim() === "") {
    name = "Guest";
  }

  if (!hobby || hobby.trim() === "") {
    hobby = "something awesome";
  }

  const now = new Date();
  const dateTime = now.toLocaleString();

  output.innerHTML = `
    Hello <strong>${name}</strong>!<br>
    Your favourite hobby is <strong>${hobby}</strong>.<br>
    <em>Current date and time:</em> ${dateTime}
  `;
});
