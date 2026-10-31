

// ---------- 1) Grades ----------
let input = prompt("Enter your degree (0 - 100):");
let degree = Number(input);

if (input === null || input === "" || isNaN(degree) || degree < 0 || degree > 100) {
  console.log("Invalid degree");
} else if (degree >= 90) {
  console.log("Excellent");
} else if (degree >= 80) {
  console.log("Very Good");
} else if (degree >= 65) {
  console.log("Good");
} else if (degree >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// ---------- 2) Calculator ----------
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+ - * / %):");

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(num1 / num2);
    }
    break;
  case "%":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(num1 % num2);
    }
    break;
  default:
    console.log("Unknown operator");
}


// ---------- 3) Leap Year ----------
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

year = 1900;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


// ---------- 4) Multiplication Table ----------
let tableNumber = Number(prompt("Enter a number:"));

for (let i = 1; i <= 12; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}


// ---------- 5) Even and Odd Sum ----------
let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenSum = evenSum + i;
  } else {
    oddSum = oddSum + i;
  }
}

console.log("Sum of even numbers: " + evenSum); // 650
console.log("Sum of odd numbers: " + oddSum);   // 625


// ---------- 6) FizzBuzz ----------
for (let i = 1; i <= 30; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// ---------- 7) Login with 3 Attempts ----------
let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
  let password = prompt("Enter the password:");

  if (password === "js2026") {
    console.log("Welcome");
    loggedIn = true;
    break;
  } else {
    attempts = attempts + 1;
  }
}

if (loggedIn === false) {
  console.log("Account locked");
}


// ---------- 8) Reverse a Number ----------
let num = 12345;
let reversed = 0;

while (num > 0) {
  let lastDigit = num % 10;
  reversed = reversed * 10 + lastDigit;
  num = (num - lastDigit) / 10;
}

console.log(reversed); // 54321


// BONUS

// 1) ATM Machine ----------
let balance = 5000;
let pinAttempts = 0;
let accessGranted = false;


while (pinAttempts < 3) {
  let pin = prompt("Enter your PIN:");

  if (pin === "4321") {
    accessGranted = true;
    break;
  } else {
    pinAttempts = pinAttempts + 1;
  }
}

if (accessGranted === false) {
  console.log("Card blocked");
} else {
  let totalWithdrawn = 0;
  let choice;
  let amount;

  do {
    choice = prompt("1 Balance\n2 Withdraw\n3 Deposit\n4 Exit");

   
    if (choice === null) {
      choice = "4";
    }

    switch (choice) {
      case "1":
        console.log("Balance: " + balance);
        break;

      case "2":
        amount = Number(prompt("Enter the amount to withdraw:"));

        if (isNaN(amount) || amount <= 0) {
          console.log("Invalid amount");
        } else if (amount % 100 !== 0) {
          console.log("Amount must be a multiple of 100");
        } else if (amount > balance) {
          console.log("Insufficient balance");
        } else if (totalWithdrawn + amount > 4000) {
          console.log("Session withdrawal limit (4000) exceeded");
        } else {
          balance = balance - amount;
          totalWithdrawn = totalWithdrawn + amount;
          console.log("Withdrawn: " + amount + " | New balance: " + balance);
        }
        break;

      case "3":
        amount = Number(prompt("Enter the amount to deposit:"));

        if (isNaN(amount) || amount <= 0) {
          console.log("Invalid amount");
        } else {
          balance = balance + amount;
          console.log("Deposited: " + amount + " | New balance: " + balance);
        }
        break;

      case "4":
        console.log("Goodbye");
        break;

      default:
        console.log("Invalid option");
    }
  } while (choice !== "4");
}


// 2) Prime Numbers ----------
let primeCount = 0;

for (let n = 2; n <= 100; n++) {
  let isPrime = true;

  for (let d = 2; d < n; d++) {
    if (n % d === 0) {
      isPrime = false;
      break; 
    }
  }

  if (isPrime) {
    console.log(n);
    primeCount = primeCount + 1;
  }
}

console.log("Total primes: " + primeCount); // 25