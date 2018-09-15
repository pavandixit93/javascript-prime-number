function getPrimeNumbers(firstNumber, endNumber) {
  let primeNumberList = [];
  let firstNum = firstNumber;
  while (firstNumber <= endNumber) {
    if (isPrimeNumber(firstNumber)) {
      primeNumberList.push(firstNumber);
    };
    firstNumber++;
  }
  document.write("<br/><br/>Prime numbers between <b>" + firstNum + "</b> and <b>" + endNumber + "</b> are: <b>" + primeNumberList.join(", ") + "</b>");
}