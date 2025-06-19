const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let input = "";

// Add event listeners to all buttons
buttons.forEach((button) => {
  const value = button.getAttribute("data-value");

  button.addEventListener("click", () => {
    if (value) {
      input += value;
      display.value = input;
    }
  });
});

// Clear input
clear.addEventListener("click", () => {
  input = "";
  display.value = "";
});

// Evaluate the result
equals.addEventListener("click", () => {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch {
    display.value = "Error";
    input = "";
  }
});
