import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';
import clickFunc from './Game';

function renderPBoard(game) {
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      if (game.grid[row][col].ship != null) {
        button.setAttribute('class', 'ship');
      }
      if (game.grid[row][col].bounded === true) {
        button.setAttribute('class', 'bounded');
      }
      button.setAttribute('id', `Com${row}${col}`);
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function renderEBoard(currentPlayer, enemy) {
  const game = currentPlayer.board;
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `p${row}${col}`);
      button.onclick = () => {
        clickFunc(currentPlayer, enemy, row, col);

        if (game.grid[row][col].ship != null) {
          button.style.backgroundImage = `url('./img/${game.grid[row][col].img}.png')`;
          button.setAttribute('class', 'ship');
        } else {
          button.style.backgroundImage = "url('./img/nill.png ')";
          button.setAttribute('class', 'pressed');
        }
        button.onclick = null;
      };
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function renderComBoard(currentPlayer, enemy) {
  const game = currentPlayer.board;
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `s${row}${col}`);
      button.onclick = () => {
        clickFunc(currentPlayer, enemy, row, col);
        document.getElementById(`Com${row}${col}`).innerHTML = '*';
        if (game.grid[row][col].ship != null) {
          button.setAttribute('class', 'ship');
        } else {
          button.innerHTML = '*';
          button.setAttribute('class', 'pressed');
        }
        button.onclick = null;
      };
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  return boardOne;
}

function shipPosBoard(player, ship, hor, pressed = false) {
  document.getElementById('setup-board').innerHTML = ' ';
  let placed = false;
  const game = player.board;
  const boardOne = document.createElement('table');

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
      button.setAttribute('id', `s${row}${col}`);
      if (pressed) {
        button.onclick = () => {
          placed = player.board.putShip(ship, row, col, hor);
          shipPosBoard(player, ship, hor, !placed);
          button.onclick = null;
        };
      }
      if (game.grid[row][col].ship != null) {
        button.setAttribute('class', 'ship');
        button.style.backgroundImage = `url('./img/${game.grid[row][col].img}.png')`;
        button.onclick = null;
      }
      if (game.grid[row][col].bounded === true) {
        button.setAttribute('class', 'bounded');
        button.style.backgroundImage = `url('./img/${game.grid[row][col].img}.png')`;
        button.onclick = null;
      }
      cell.appendChild(button);
      rowTab.appendChild(cell);
    }
    arr.forEach(printEle);
    boardOne.appendChild(rowTab);
  }
  arr.forEach(printRow);
  document.getElementById('setup-board').appendChild(boardOne);
}

const compPosition = (computerBoard) => {
  const shipAry = shuffle(computerBoard.ships);
  const iterator = [0, 1, 2, 3, 4];
  const coords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const vertHor = () => sampleSize([true, false], 1);
  const coorDice = () => sampleSize(coords, 1);
  iterator.forEach(x => {
    function itrate() {
      if (!computerBoard.putShip(shipAry[x], coorDice()[0], coorDice()[0], vertHor()[0])) {
        itrate();
      }
    }
    itrate();
  });
  return computerBoard;
}


function shipPlacement(player, player2) {
  const selectors = document.getElementById('selector');
  const direction = document.createElement('input');
  direction.type = 'checkbox';
  let counter = 0;
  const carrierBtn = document.createElement('button');
  carrierBtn.innerHTML = 'Carrier L5';
  carrierBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[0], false, true);
    } else {
      shipPosBoard(player, player.board.ships[0], true, true);
    }
    counter += 1;
    carrierBtn.disabled = true;
  };

  const battleshipBtn = document.createElement('button');
  battleshipBtn.innerHTML = 'BattleShip L4';
  battleshipBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[1], false, true);
    } else {
      shipPosBoard(player, player.board.ships[1], true, true);
    }
    counter += 1;
    battleshipBtn.disabled = true;
  };
  const submarineBtn = document.createElement('button');
  submarineBtn.innerHTML = 'Submarine L3';
  submarineBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[2], false, true);
    } else {
      shipPosBoard(player, player.board.ships[2], true, true);
    }
    counter += 1;
    submarineBtn.disabled = true;
  };
  const destroyerBtn = document.createElement('button');
  destroyerBtn.innerHTML = 'Destroyer L3';
  destroyerBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[3], false, true);
    } else {
      shipPosBoard(player, player.board.ships[3], true, true);
    }
    counter += 1;
    destroyerBtn.disabled = true;
  };
  const patrolboatBtn = document.createElement('button');
  patrolboatBtn.innerHTML = 'PatrolBoat L2';
  patrolboatBtn.onclick = () => {
    if (direction.checked == false) {
      shipPosBoard(player, player.board.ships[4], false, true);
    } else {
      shipPosBoard(player, player.board.ships[4], true, true);
    }
    counter += 1;
    patrolboatBtn.disabled = true;
  };

  const startBtn = document.createElement('button');
  startBtn.innerHTML = 'Start Game';
  startBtn.onclick = () => {
    if (counter === 5) {
      document.getElementById('setup-board').innerHTML = ' ';
      document.getElementById('selector').innerHTML = ' ';
      compPosition(player2.board);
      document.getElementById('board-1').appendChild(renderPBoard(player.board));
      document.getElementById('board-2').appendChild(renderEBoard(player2, player));
    }
  }

  selectors.appendChild(carrierBtn);
  selectors.appendChild(battleshipBtn);
  selectors.appendChild(submarineBtn);
  selectors.appendChild(destroyerBtn);
  selectors.appendChild(patrolboatBtn);
  selectors.appendChild(direction);
  selectors.appendChild(startBtn);
}



function dispInit(player1, player2) {
  document.getElementById('message').innerHTML = '';
  document.getElementById('after-game').innerHTML = '';
  shipPlacement(player1, player2);
}

export default dispInit;
export { compPosition };