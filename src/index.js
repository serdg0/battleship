import Gameboard from './Gameboard';
import Ship from './Ship';
import dispInit from './dom';
import css from './assets/css/style.css';


const carrier = Ship({ name: 'carrier', length: 5 });
const battleship = Ship({ name: 'battleship', length: 4 });
const submarine = Ship({ name: 'submarine', length: 3 });
const destroyer = Ship({ name: 'destroyer', length: 3 });
const patrolBoat = Ship({ name: 'patrolBoat', length: 2 });

const ships = [carrier, battleship, submarine, destroyer, patrolBoat];

let game = Gameboard({ ships });
dispInit(game);
game.putShip(ships[4], 0, 0);
game.receiveAttack(0, 0);
game.receiveAttack(0, 1);
game.receiveAttack(5, 5);
console.log(game.grid);
console.log('hits: ' + game.hits);
console.log('sanked: ' + game.sunkShips);
console.log(game.AllShipsDown())