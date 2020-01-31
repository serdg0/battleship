// eslint-disable-next-line
import sampleSize from 'lodash.samplesize';

const attackBot = (enemy, currentPlayer) => {
  const row = sampleSize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
  const col = sampleSize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
  if (enemy.board.grid[row][col].hit === false) {
    currentPlayer.attack(enemy, row, col);
    document.getElementById(`Com${row}${col}`).style.backgroundImage = `url('./img/${enemy.board.grid[row][col].img}.png')`;
    if (enemy.board.grid[row][col].ship == null) {
      // eslint-disable-next-line no-use-before-define
      changeTurn(enemy, currentPlayer);
    } else attackBot(enemy, currentPlayer);
  } else attackBot(enemy, currentPlayer);
};

const checkWin = (currentPlayer, enemy) => {
  const newGame = document.createElement('button');
  newGame.innerHTML = 'Start a new game';
  newGame.setAttribute('id', 'new-game-btn');
  newGame.onclick = () => {
    document.location.reload();
  };
  if (currentPlayer.board.AllShipsDown()) {
    let cells = document.getElementsByClassName('active-cell');
    cells = Array.from(cells);
    cells.forEach(button => {
      button.onclick = null;
    });
    document.getElementById('message').innerHTML = `GAME OVER! ${enemy.name} Won defeating the ${currentPlayer.name}`;
    document.getElementById('after-game').appendChild(newGame);
  }
  if (enemy.board.AllShipsDown()) {
    let cells = document.getElementsByClassName('active-cell');
    cells = Array.from(cells);
    cells.forEach(button => {
      button.onclick = null;
    });
    document.getElementById('message').innerHTML = `GAME OVER! ${currentPlayer.name} Won defeating the ${enemy.name}`;
    document.getElementById('after-game').appendChild(newGame);
  }
};

const changeTurn = (currentPlayer, enemy) => {
  checkWin(currentPlayer, enemy);
  if (enemy.id === 0) {
    document.getElementById('board-2').style.display = 'none';

    attackBot(enemy, currentPlayer);
  } else {
    document.getElementById('board-2').style.display = 'block';
  }
};

const clickFunc = (currentPlayer, enemy, x, y) => {
  enemy.attack(currentPlayer, x, y);
  checkWin(currentPlayer, enemy);
  if (currentPlayer.board.grid[x][y].ship == null) {
    changeTurn(currentPlayer, enemy);
  }
};

export default clickFunc;