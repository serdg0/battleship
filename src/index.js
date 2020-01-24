import Gameboard from './Gameboard';
import Ship from './Ship';
import dispInit from './dom';
import Player from './Player';
import css from './assets/css/style.css';


const carrier = Ship({ name: 'carrier', length: 5 });
const battleship = Ship({ name: 'battleship', length: 4 });
const submarine = Ship({ name: 'submarine', length: 3 });
const destroyer = Ship({ name: 'destroyer', length: 3 });
const patrolBoat = Ship({ name: 'patrolBoat', length: 2 });

const ships = [carrier, battleship, submarine, destroyer, patrolBoat];




let eapen = Player({ name: 'Eapen', ships: ships })
let computer = Player({ name: 'Evil machine', ships: ships });
//eapen.attack(computer, 0, 0);
let game = eapen.board;
game.putShip(ships[4], 0, 0, false);
//game.receiveAttack(0, 0);
//game.receiveAttack(0, 1);
//game.receiveAttack(5, 5);
console.log(eapen.board.grid);
console.log('hits: ' + game.hits.val());
console.log('sanked: ' + game.sunkShips.val());
dispInit(game)
console.log(game.AllShipsDown())
console.log(eapen)