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
      button.setAttribute('class', 'active-cell');
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
};


function shipPlacement(player, player2) {
  shipPosBoard(player, null, false);
  document.getElementById('message').textContent = 'Align your ship before selecting your ship';
  const selectors = document.getElementById('selector');
  let direction = false;
  const directionBtn = document.createElement('button');
  directionBtn.innerHTML = 'Rotate Ships';

  let counter = 0;
  const carrierBtn = document.createElement('button');
  const carrierImg = document.createElement('img');
  carrierImg.src = 'img/career.png';
  carrierBtn.appendChild(carrierImg);
  carrierBtn.setAttribute('class', 'col-4 ship-img');
  carrierBtn.onclick = () => {
    document.getElementById('message').textContent = 'Place your ship on the desired position on the board';
    if (direction === false) {
      shipPosBoard(player, player.board.ships[0], false, true);
    } else {
      shipPosBoard(player, player.board.ships[0], true, true);
    }
    counter += 1;
    carrierBtn.disabled = true;
  };

  const battleshipBtn = document.createElement('button');
  const battleshipImg = document.createElement('img');
  battleshipImg.src = 'img/battleship.png';
  battleshipBtn.appendChild(battleshipImg);
  battleshipBtn.setAttribute('class', 'col-4 ship-img');
  battleshipBtn.onclick = () => {
    document.getElementById('message').textContent = 'Place your ship on the desired position on the board';
    if (direction === false) {
      shipPosBoard(player, player.board.ships[1], false, true);
    } else {
      shipPosBoard(player, player.board.ships[1], true, true);
    }
    counter += 1;
    battleshipBtn.disabled = true;
  };
  const submarineBtn = document.createElement('button');
  const submarineImg = document.createElement('img');
  submarineImg.src = 'img/destroyer.png';
  submarineBtn.appendChild(submarineImg);
  submarineBtn.setAttribute('class', 'col-4 ship-img');
  submarineBtn.onclick = () => {
    document.getElementById('message').textContent = 'Place your ship on the desired position on the board';
    if (direction === false) {
      shipPosBoard(player, player.board.ships[2], false, true);
    } else {
      shipPosBoard(player, player.board.ships[2], true, true);
    }
    counter += 1;
    submarineBtn.disabled = true;
  };
  const destroyerBtn = document.createElement('button');
  const destroyerImg = document.createElement('img');
  destroyerImg.src = 'img/destroyer.png';
  destroyerBtn.appendChild(destroyerImg);
  destroyerBtn.setAttribute('class', 'col-4 ship-img');
  destroyerBtn.onclick = () => {
    document.getElementById('message').textContent = 'Place your ship on the desired position on the board';
    if (direction === false) {
      shipPosBoard(player, player.board.ships[3], false, true);
    } else {
      shipPosBoard(player, player.board.ships[3], true, true);
    }
    counter += 1;
    destroyerBtn.disabled = true;
  };
  const patrolboatBtn = document.createElement('button');
  const patrolboatImg = document.createElement('img');
  patrolboatImg.src = 'img/patrol.png';
  patrolboatBtn.appendChild(patrolboatImg);
  patrolboatBtn.setAttribute('class', 'col-4 ship-img');
  patrolboatBtn.onclick = () => {
    document.getElementById('message').textContent = 'Place your ship on the desired position on the board';
    if (direction === false) {
      shipPosBoard(player, player.board.ships[4], false, true);
    } else {
      shipPosBoard(player, player.board.ships[4], true, true);
    }
    counter += 1;
    patrolboatBtn.disabled = true;
  };
  directionBtn.onclick = () => {
    if (direction === false) {
      direction = true;
      carrierImg.style.transform = 'rotate(90deg)';
      battleshipImg.style.transform = 'rotate(90deg)';
      submarineImg.style.transform = 'rotate(90deg)';
      destroyerImg.style.transform = 'rotate(90deg)';
      patrolboatImg.style.transform = 'rotate(90deg)';
    } else {
      direction = false;
      carrierImg.style.transform = 'rotate(0deg)';
      battleshipImg.style.transform = 'rotate(0deg)';
      submarineImg.style.transform = 'rotate(0deg)';
      destroyerImg.style.transform = 'rotate(0deg)';
      patrolboatImg.style.transform = 'rotate(0deg)';
    }
  };
  const startBtn = document.createElement('button');
  startBtn.innerHTML = 'Start Game';
  startBtn.onclick = () => {
    if (counter === 5) {
      document.getElementById('setup-board').innerHTML = '';
      document.getElementById('selector').innerHTML = '';
      document.getElementById('message').textContent = '';
      compPosition(player2.board);
      document.getElementById('board-1').appendChild(renderPBoard(player.board));
      document.getElementById('board-2').appendChild(renderEBoard(player2, player));
    }
  };
  const setDiv = document.createElement('div');
  setDiv.setAttribute('class', 'col-4 set-div');
  setDiv.appendChild(directionBtn);
  setDiv.appendChild(startBtn);
  selectors.appendChild(carrierBtn);
  selectors.appendChild(battleshipBtn);
  selectors.appendChild(submarineBtn);
  selectors.appendChild(destroyerBtn);
  selectors.appendChild(patrolboatBtn);
  selectors.appendChild(setDiv);

}

function dispInit(player1, player2) {
  document.getElementById('message').innerHTML = '';
  document.getElementById('after-game').innerHTML = '';
  shipPlacement(player1, player2);
}

export default dispInit;
export { compPosition };