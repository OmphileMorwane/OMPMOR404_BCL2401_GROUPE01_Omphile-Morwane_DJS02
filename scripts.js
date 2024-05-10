const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Scenario:Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider);
  result.classList.remove("error-message");

  //Throw error for invalid division
  if (divider === "0") {
    result.innerText = "Error: Invalid number provided. Try again!";
    result.classList.add("error-message");
    throw new Error (
      "Division not performed. Invalid number provided. Try again"
    )
  }

  //validation when values are missing
  else if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.classList.add("error-message");
  }

});