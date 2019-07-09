let playMessage = confirm('Do you want to play a game?');
let numberDeviation = -1;
let multiplier = 2;
let attempts = 3;
let increaceRange = 4;
let reset = -1;

if (!playMessage) {
  alert('You did not become a billionaire, but can.');
} else {
  let gameContinuous = false;
  do {
    let maxNumber = 9;
    let number = Math.floor(Math.random() * maxNumber);
    let maxPrize = 100;
    let prize = 0;
    for (let i = 0; i < attempts; i++) {
      const userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNumber + numberDeviation}\n 
      Attempts left: ${attempts - i}\n 
      Total prize: ${prize}$\n Possible prize on current attempt: ${maxPrize}$`));
      if (userNumber === null) {
        alert('You did not become a billionaire, but can.');
        break;
      }
      if (userNumber === number) {
        gameContinuous = confirm(`Congratulation, you won!\n 
        Your prize is: ${prize + maxPrize}$.\n 
        Do you want to continue?`);
        prize += maxPrize;
        if (gameContinuous) {
          i = reset;
          prize = maxPrize;
          maxPrize * multiplier;
          maxNumber *= maxNumber + increaceRange;
          number = Math.floor(Math.random() * maxNumber);
        } else {
          break;
        }
      } else if (userNumber !== number) {
        maxPrize /= multiplier;
      }

    }
    alert(`Thank you for your participation. Your prize is: ${prize}$`);
    gameContinuous = confirm('Do you want play again?');
  } while (gameContinuous)
}