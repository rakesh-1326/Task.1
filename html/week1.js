document.getElementById("factorialForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById("number").value);
    const output = document.getElementById("output");
    if (isNaN(number) || number < 0) {
      output.textContent = "Please enter a valid positive integer.";
      return;
    }
    const iterativeFactorial = (n) => {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    };
    const recursiveFactorial = (n) => {
      if (n === 0 || n === 1) return 1;
      return n * recursiveFactorial(n - 1);
    };
    const iterativeResult = iterativeFactorial(number);
    const recursiveResult = recursiveFactorial(number);
    output.innerHTML = `
      <p>Iterative Result: ${iterativeResult}</p>
      <p>Recursive Result: ${recursiveResult}</p>
    `;
  });
  