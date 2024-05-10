const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider);
  result.classList.remove("error-message");

  //Throw error for invalid division
  if (divider === "0") {
    result.innerText = "Error: Invalid number provided. Try again!";
    result.classList.add("error-message");
    throw new Error (
      "Invalid division, cannot use 0"
    )
  }

});