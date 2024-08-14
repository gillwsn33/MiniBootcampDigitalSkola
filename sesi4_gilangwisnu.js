const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Kalkulator Sederhana");
console.log("Operasi: + (penjumlahan), - (pengurangan)");

readline.question("Masukkan perhitungan (contoh: 5 + 3): ", (input) => {
  const [num1, operator, num2] = input.split(" ");

  let result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    default:
      result = "Operasi tidak valid";
  }

  console.log(`Hasil: ${result}`);
  readline.close();
});
