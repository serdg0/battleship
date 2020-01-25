function renderBoard(game) {
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
      button.setAttribute('id', `a${row}${col}`);
      button.onclick = function() {
        game.receiveAttack(row, col);
        button.innerHTML = '*';
        button.setAttribute('class', 'pressed');
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

function dispInit(board1, board2) {
  document.getElementById('board-1').appendChild(renderBoard(board1));
  document.getElementById('board-2').appendChild(renderBoard(board2));
}

export default dispInit;