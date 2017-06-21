/*
 *  Write a function that generates every sequence of throws a single
 *  player could throw over a three-round game of rock-paper-scissors.
 */

const rockPaperScissors = (rnds) => {
  let results = [],
      rounds = rnds || 3; // default 3 times

  const generateCombos = (roundsLeft, playedRounds) => {
    let choices = ['rock', 'paper', 'scissors'],
        len = choices.length;

    if (roundsLeft === 0) {
      results.push(playedRounds);
      return;
    }

    for (let i=0; i<len; i++) {
      let curr = choices[i];
      generateCombos(roundsLeft-1, playedRounds.concat(curr));
    }
  };

  generateCombos(rounds, []);
  return results;
};
console.log(rockPaperScissors());