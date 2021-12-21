const JUMP_SQUARES = {
  1: 38,
  4: 14,
  9: 31,
  16: 6,
  21: 42,
  28: 84,
  36: 44,
  47: 26,
  49: 11,
  51: 67,
  56: 53,
  62: 19,
  64: 60,
  71: 91,
  80: 100,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};
const spinWheel = () => {
  return Math.ceil(Math.random() * 6);
};

//runs one game, returns all squares visited
function runGame() {
  let numJumps = 0;
  let numTurns = 0;
  let currentSquare = 0;
  let squaresVisited = [];

  while (currentSquare != 100) {
    // spin wheel
    let spacesToMove = spinWheel();
    numTurns++;
    let squareToMoveTo = currentSquare + spacesToMove;

    // check ups or downs
    if (JUMP_SQUARES[squareToMoveTo]) {
      numJumps++;
      squaresVisited.push(squareToMoveTo);
      currentSquare = JUMP_SQUARES[squareToMoveTo];
      squaresVisited.push(currentSquare);
    } else if (squareToMoveTo <= 100) {
      currentSquare = squareToMoveTo;
      squaresVisited.push(currentSquare);
    } else if (squareToMoveTo > 100) {
      currentSquare = currentSquare;
      squaresVisited.push(currentSquare);
    }
  }

  return { squares: squaresVisited, jumps: numJumps, turns: numTurns };
}