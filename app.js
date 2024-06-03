// Create random number

const randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);

// Create and assign the total attempts

let totalAttempts = 5;

const totalAtt = document.getElementById("attempts");
totalAtt.textContent = totalAttempts;

// Create button event listener

const button = document.getElementById("btn-guess");

button.addEventListener("click", () => {
  const userNumber = document.getElementById("input-number").value;
  const result = document.getElementById("result");
  const rangeMax = document.getElementById("range-max");
  const rangeMin = document.getElementById("range-min");
  const playAgain = document.getElementById("playAgainButton");

  if (totalAttempts > 0) {
    if (userNumber > 1 && userNumber < 101) {
      if (userNumber < randomNumber) {
        result.textContent = "That's too low. Try Again!";
        rangeMin.textContent = userNumber;
      } else if (userNumber > randomNumber) {
        result.textContent = "That's too high. Try Again!";
        rangeMax.textContent = userNumber;
      } else {
        result.textContent = "You Guessed it Right!";
      }

      totalAttempts--;
      totalAtt.textContent = totalAttempts;
      if(totalAttempts === 0){
        result.textContent = "Game over!";
        playAgain.textContent = "Play Again!"
      }
    } else {
        result.textContent = "Please enter a number between 1 and 100!";
    }
  }
});
