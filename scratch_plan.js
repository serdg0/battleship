import Player from "./src/Player";
import sampleSize from 'lodash.samplesize';

const randomCoordinate = () => {
  return sampleSize([0, 1,2,3,4,5,6,7,8,9], 2)
}

const changeTurn = (id) => {
  if (id == 0) {
    return 1
  } else {
    return 0
  }
}

const clickFunc = (currentPlayer, enemy, x, y) =>  {
    let currentPlayerId; // read coordinates
    if (enemy.board.AllShipsDown()) {
        console.log('GAME OVER');
      }
    currentPlayer.attack(enemy, x, y);
  if (enemy.board.AllShipsDown()) {
    console.log('GAME OVER');
  }
  if (enemy.board.grid[x][y].ship == null) {
    currentPlayerId = changeTurn(currentPlayer.id);
    if (player.id == currentPlayerId) {
        currentPlayer = player;
        enemy = computer;
      } else {
        currentPlayer = computer;
        enemy = player;
      };
  } 
}

const Game = () => {
  let player = Player({ name = 'Player' });
  let computer = Player({ name = 'Evil machine' });
  computer.id = 1;

  let currentPlayer = player;
  let enemy = computer;
  
  clickFunc(currentPlayer, enemy, x, y);
}