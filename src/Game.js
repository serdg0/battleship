import Player from "./Player";
//import sampleSize from 'lodash.samplesize';

const changeTurn = (id) => {
  if (id === 0) {
    console.log("Computers Turn");
    document.getElementById('board-2').style.display = 'none';
    document.getElementById('board-3').style.display = 'block';
  } else {
    console.log("Players Turn");
    document.getElementById('board-3').style.display = 'none';
    document.getElementById('board-2').style.display = 'block';
  }
}

const clickFunc = (currentPlayer, enemy, x, y) => {
  let currentPlayerId;
  currentPlayer.attack(enemy, x, y);
  if (enemy.board.AllShipsDown()) {
    console.log('GAME OVER');
  }
  if (enemy.board.grid[x][y].ship == null) {
    changeTurn(enemy.id);
    // if (player.id == currentPlayerId) {
    //   currentPlayer = player;
    //   enemy = computer;
    // } else {
    //   currentPlayer = computer;
    //   enemy = player;
    // };
  }
}

const Game = (player1, player2) => {
  /*****************************************************************/


  // get player name from dom
  // Get ship positions 
  //Player 01 ships
  player1.board.putShip(player1.board.ships[4], 0, 0, false);
  player1.board.putShip(player1.board.ships[1], 2, 4, false);
  player1.board.putShip(player1.board.ships[0], 0, 2, true);
  player1.board.putShip(player1.board.ships[2], 7, 2, true);
  player1.board.putShip(player1.board.ships[3], 5, 8, false);
  //Player 02 ships
  player2.board.putShip(player2.board.ships[4], 0, 0, false);
  player2.board.putShip(player2.board.ships[1], 2, 4, false);
  player2.board.putShip(player2.board.ships[0], 0, 2, true);
  player2.board.putShip(player2.board.ships[2], 7, 2, true);
  player2.board.putShip(player2.board.ships[3], 5, 8, false);
}

export default Game;
export { clickFunc };