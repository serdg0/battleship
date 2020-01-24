import Player from "./Player";
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

const clickFunc = (enemy, currentPlayer, x, y) =>  { // read coordinates
  currentPlayer.attack(enemy, x, y);
  if (enemy.board.grid[x][y].ship == null) {
    return changeTurn();
  } 
  if (enemy.board.AllShipsDown()) {
    console.log('GAME OVER');
  }
}

const Game = () => {
  let player = Player({ name = 'Player' });
  let computer = Player({ name = 'Evil machine' });
  computer.id = 1;

  let currentPlayer = player;
  let enemy = computer;
  let currentPlayerId = currentPlayer.id;
  


  if (enemy.board.AllShipsDown()) {
    console.log('GAME OVER');
  }

  if (!enemy.board.lastHit) {
    if (player.id == currentPlayerId) {
      currentPlayer = player;
      enemy = computer;
    } else {
      currentPlayer = computer;
      enemy = player;
    };

  }
}