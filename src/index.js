import Gameboard from './Gameboard';
import Ship from './Ship';
import dispInit from './dom';
import Player from './Player';
import Game from './Game';
import css from './assets/css/style.css';

//let computer = Player({ name: 'Evil machine', ships: ships });
//eapen.attack(computer, 0, 0);
//let game = eapen.board;
//game.putShip(ships[4], 0, 0, false);
//game.putShip(ships[4], 2, 2, false);
//game.putShip(ships[4], 2, 6, false);
//game.putShip(ships[1], 7, 2, false);
//game.putShip(ships[0], 0, 2, true);
//game.receiveAttack(0, 0);
//game.receiveAttack(0, 1);
//game.receiveAttack(5, 5);
//console.log(eapen.board.grid);
//console.log('hits: ' + game.hits.val());
//console.log('sanked: ' + game.sunkShips.val());
//console.log(game.AllShipsDown())
//console.log(eapen)

const carrier = Ship({ name: 'carrier', length: 5 });
const battleship = Ship({ name: 'battleship', length: 4 });
const submarine = Ship({ name: 'submarine', length: 3 });
const destroyer = Ship({ name: 'destroyer', length: 3 });
const patrolBoat = Ship({ name: 'patrolBoat', length: 2 });

const ships = [carrier, battleship, submarine, destroyer, patrolBoat];

const player = Player({ name: 'Player', ships: ships });
const computer = Player({ name: 'Evil machine', ships: ships });
Game(player, computer);
dispInit(player.board, computer.board);