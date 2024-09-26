// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

// get sign
function getSign(num) {
  if (num > 0) {
    return "pos";
  } else if (num < 0) {
    return "neg";
  } else {
    return "zero";
  }
}

// even or odd
function evenOrOdd(num) {
  // modulo operater % finds the remainder of the number when diveded by a specific number
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

// multiple of 10?
function multipleOf10(num) {
  if (num % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

// number of digits
function numDigits(num) {
  // turn parameter into a string
  let digits = `${num}`;
  var firstDigit = digits.charAt(0);
  digits = digits.length;
  if (firstDigit == "-") {
    digits -= 1;
  }
  return digits;
}

// is it a prime?
function isPrime(num) {
  let number = `${num}`;
  let isPrime = true;
  // check if number is equal to 1
  if (number.charAt(0) == "-") {
    isPrime = false;
    return isPrime;
  } else if (number == 1) {
    isPrime = false;
    return isPrime;
    // check if number is greater than 1
  } else if (number > 1) {
    // check if the number is divisible by positive numbers
    // num % i == 0 checks if the number is divisible by numbers other than 1 and itself; if 0, number is not a prime
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        isPrime = false;
        return isPrime;
      }
    }
    if (isPrime) {
      return isPrime;
    }
  }
}

// Teacher's note:
// 256
// "256".length
// prompt() and input always return values given as Strings
// Careful!  "-256".length returns 4
