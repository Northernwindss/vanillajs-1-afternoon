console.log('hello')
const board = []

function play(clickedId) {
  let playerSpan = document.getElementById('player');
  let clickedElement = document.getElementById(clickedId)

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  };

  if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} is the winnder`);
    return
  };

  if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} is the winner`);
    return
  };

  if (topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} is the winner`)
  }

  if (topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} is the winner`)
  }

  if (topRight !== undefined && topRight === midRight && topRight === botRight) {
    alert(`${topRight} is the winner`)
  }

  if (topRight !== undefined && topRight === midMid && topRight === botLeft) {
    alert(`${topRight} is the winner`)
  }
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}


console.log(1111, board)

const topLeft = board[0]
const topMid = board[1]
const topRight = board[2]
const midLeft = board[3]
const midMid = board[4]
const midRight = board[5]
const botLeft = board[6]
const botMid = board[7]
const botRight = board[8]

// if(topMid !== undefined && topMid === midMid && topMid === botMid) {
//   alert(`${topMid} is the winner`)
// }

// if(topMid !== undefined && topMid === midMid && topMid === botMid) {
//   alert(`${topMid} is the winner`)
// }

