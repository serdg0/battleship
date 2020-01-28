import { clickFunc, MainGame } from './Game';

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
      if (game.grid[row][col].bounded == true) {
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

function shipPosBoard(player, ship, hor) {
  document.getElementById('setup-board').innerHTML = ' ';
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
      button.onclick = () => {
        player.board.putShip(ship, row, col, hor);
        shipPosBoard(player, ship, hor);
        button.onclick = null;
      };
      if (game.grid[row][col].ship != null) {
        button.setAttribute('class', 'ship');
        button.onclick = null;
      }
      if (game.grid[row][col].bounded == true) {
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

function shipPlacement(player) {
  const carrierBtn = document.createElement('button');
  carrierBtn.innerHTML = 'Carrier L5';
  carrierBtn.onclick = () => {
    shipPosBoard(player, player.board.ships[0], false);
  };

  const battleshipBtn = document.createElement('button');
  battleshipBtn.innerHTML = 'BattleShip L4';
  battleshipBtn.onclick = () => {
    shipPosBoard(player, player.board.ships[1], false);
  };
  const submarineBtn = document.createElement('button');
  submarineBtn.innerHTML = 'Submarine L3';
  submarineBtn.onclick = () => {
    shipPosBoard(player, player.board.ships[2], false);
  };
  const destroyerBtn = document.createElement('button');
  destroyerBtn.innerHTML = 'Destroyer L3';
  destroyerBtn.onclick = () => {
    shipPosBoard(player, player.board.ships[3], false);
  };
  const patrolboatBtn = document.createElement('button');
  patrolboatBtn.innerHTML = 'PatrolBoat L2';
  patrolboatBtn.onclick = () => {
    shipPosBoard(player, player.board.ships[4], false);
  };

  const selectors = document.getElementById('selector');
  selectors.appendChild(carrierBtn);
  selectors.appendChild(battleshipBtn);
  selectors.appendChild(submarineBtn);
  selectors.appendChild(destroyerBtn);
  selectors.appendChild(patrolboatBtn);
}

function dispInit(player1, player2) {
  shipPlacement(player1);
  document.getElementById('board-1').appendChild(renderPBoard(player1.board));
  document.getElementById('board-2').appendChild(renderEBoard(player2, player1));
  document.getElementById('board-3').appendChild(renderComBoard(player1, player2));
}

export default dispInit;