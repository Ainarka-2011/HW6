let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let text = document.getElementById("text");

red.addEventListener("click", () => {
  text.textContent = "STOP";
  colors();
  text.style.color = "red";
  red.style.backgroundColor = "red";
});

yellow.addEventListener("click", () => {
  text.textContent = "WAIT";
  colors();
  text.style.color = "yellow";
  yellow.style.backgroundColor = "yellow";
});

green.addEventListener("click", () => {
  text.textContent = "GO";
  colors();
  text.style.color = "green";
  green.style.backgroundColor = "green";
});

function colors() {
  red.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "grey";
  green.style.backgroundColor = "grey";
}