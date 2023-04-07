/* 
👉 Write your kata here!

The Lost Treasure of the Pirate King:

Legend has it that the infamous Pirate King buried his treasure on a deserted island. To find the treasure, you need to solve a puzzle.

The Pirate King was known to be a fan of mathematics, and he designed a puzzle that only the most skilled and clever treasure hunters could solve. 

According to the legend, to reveal the secret location, you must find the sum of all the multiples of 4 and 7 up to and including the chosen number.

The answer will reveal the coordinates of the treasure.

Good luck.

*/

//👉 Write the function your CodeWarriors will start with below here:
// remember to add export before testing

export function treasureHunt(number) {
  let sum = 0;
  for(let i = 1; i <= number; i++){
    if(i % 4 === 0 || i % 7 === 0){
      sum += i;
    }
  }
  return sum;
};

