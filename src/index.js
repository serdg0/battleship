import Gameboard from './Gameboard';
import Ship from './Ship';
import dispInit from './dom';
import Player from './Player';
import Game from './Game';
import compPosition from './dom'
import css from './assets/css/style.css';


const carrier = Ship({ name: 'carrier', length: 5 });
const battleship = Ship({ name: 'battleship', length: 4 });
const submarine = Ship({ name: 'submarine', length: 3 });
const destroyer = Ship({ name: 'destroyer', length: 3 });
const patrolBoat = Ship({ name: 'patrolBoat', length: 2 });

const ships = [carrier, battleship, submarine, destroyer, patrolBoat];

const player = Player({ id: 0, name: 'Player', ships: ships });
const computer = Player({ id: 1, name: 'Evil machine', ships: ships });

//compPosition(computer.board);
Game(player, computer);
dispInit(player, computer);