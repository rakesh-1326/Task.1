document.getElementById("factorialForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = parseInt(document.getElementById("number").value);
  const output = document.getElementById("output");
  if (isNaN(number) || number < 0) {
    output.textContent = "Please enter a valid positive integer.";
    return;
  }
  const recursiveFactorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * recursiveFactorial(n - 1);
  };
  const recursiveResult = recursiveFactorial(number);
  output.innerHTML = `
    <p>Recursive Result: ${recursiveResult}</p>
  `;
});
