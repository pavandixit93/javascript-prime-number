function isPrimeNumber(number) {
  let count = 0;
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++
    }
  }
  if (count > 2) {
    document.write("<br \><b style='color:red'>" + number + "</b> is not Prime number");
    return false;
  }
  else {
    document.write("<br \><b style='color:green'>" + number + "</b> is Prime number");
    return true;
  }
}