const button = document.querySelector("button");

button.addEventListener("click", function () {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
 
  const result = document.querySelector("#result");
  result.innerText = `${num1} + ${num2} = ${num1 + num2} \n${num1} - ${num2} = ${num1 - num2} \n${num1} * ${num2} = ${num1 * num2} \n${num1} / ${num2} = ${num1 / num2} \n`;

  const reset = document.querySelector("#reset");
  reset.style.display = "block";
  reset.addEventListener("click", function () {
    result.innerText = "";
    reset.style.display = "none";
    document.querySelector("#num1").value = ''
    document.querySelector("#num2").value = ''
  });
});
