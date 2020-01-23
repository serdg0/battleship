function dispInit(game) {
  const boardOne = document.createElement('table');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function printRow(row) {
    const rowTab = document.createElement('tr');

    function printEle(col) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = `${row}${col}`;
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
  document.getElementById('board-1').appendChild(boardOne);
}

export default dispInit;