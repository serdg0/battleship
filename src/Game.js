import Player from "./Player";
import sampleSize from 'lodash.samplesize';

const Game = (player1, player2) => {
  /*****************************************************************/
  // get player name from dom
  // Get ship positions 
  //Player 01 ships
  player1.board.putShip(player1.board.ships[4], 0, 0, false);
  player1.board.putShip(player1.board.ships[4], 2, 6, false);
  player1.board.putShip(player1.board.ships[1], 2, 4, false);
  player1.board.putShip(player1.board.ships[1], 5, 6, false);
  player1.board.putShip(player1.board.ships[0], 0, 2, true);
  player1.board.putShip(player1.board.ships[2], 7, 2, true);
  player1.board.putShip(player1.board.ships[3], 5, 8, false);
  //Player 02 ships
  player2.board.putShip(player2.board.ships[4], 0, 0, false);
  player2.board.putShip(player2.board.ships[4], 2, 6, false);
  player2.board.putShip(player2.board.ships[1], 2, 4, false);
  player2.board.putShip(player2.board.ships[1], 5, 6, false);
  player2.board.putShip(player2.board.ships[0], 0, 2, true);
  player2.board.putShip(player2.board.ships[2], 7, 2, true);
  player2.board.putShip(player2.board.ships[3], 5, 8, false);
}

export default Game;