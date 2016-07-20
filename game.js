/*
  return an array of two random numbers per frame
*/
function scores(min, max, currentTurn, frames){
  var maxTurn = 2;
  var currentBowl = [];
  var strike = 10;

  for (var i = 0; i < maxTurn; i++) {
    var random = Math.floor(Math.random() * (max - min)) + min;

    currentBowl.push(random);

    // console.log("current frame ", frames);

    // The very last turn, will add another two chances
    if (currentTurn === 9) {
      if (random === strike && frames[9][0] === strike) {
        random = Math.floor(Math.random() * (max - min)) + min;
        currentBowl.push(random);
      }
    }
  }
  return currentBowl;
};

/*
  Adds the current score
*/
function addCurrentScore(arr) {
  var currentScore = arr;
  // loops through the current array and adds both of scores together
  return currentScore.reduce(function (pre, curr) {
    return pre + curr;
  });
}

/*
  Runs the game and returns scores for 10 frames
*/
function runGame() {
  numOfFrames = 10;
  var frames = [];
  var totScore = 0;

  for (var i = 0; i < numOfFrames; i++) {
    frames.push(scores(0, 11, i, frames));
    totScore += addCurrentScore(frames[i]);
  }
  console.log(frames);
  console.log(totScore);

  // console.log(frames[9][0]);
}

runGame();
