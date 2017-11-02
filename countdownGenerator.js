var countdownGenerator = function (x) {
  var currentCountdown = x
  var message = ""
  return function () {
    if (currentCountdown < 0) {
      message = "Rockets already gone, bub!"
    } else if (currentCountdown == 0) {
      message = "Blast Off!"
    } else {
      message = "T-minus " + currentCountdown + "..."
    }
    currentCountdown -= 1
  console.log(message);
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!