function calculateSum() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
     const sum = firstNumber + secondNumber;
    alert(sum);
  } else {
    alert("Please enter numbers ");
  }
}
