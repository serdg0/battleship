import Ship from './Ship';
import dispInit from './dom';
import Player from './Player';
import './assets/css/style.css';

function gameStarter() {
  const carrier = Ship({
    name: 'carrier',
    length: 5,
    imgArrV: ['top', 'mid', 'mid', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'mid-h', 'mid-h', 'bottom-h'],
  });
  const battleship = Ship({
    name: 'battleship',
    length: 4,
    imgArrV: ['top', 'mid', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'mid-h', 'bottom-h'],
  });
  const submarine = Ship({
    name: 'submarine',
    length: 3,
    imgArrV: ['top', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'bottom-h'],
  });
  const destroyer = Ship({
    name: 'destroyer',
    length: 3,
    imgArrV: ['top', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'bottom-h'],
  });
  const patrolBoat = Ship({
    name: 'patrolBoat',
    length: 2,
    imgArrV: ['top', 'bottom'],
    imgArrH: ['top-h', 'bottom-h'],
  });

  const playerShips = [carrier, battleship, submarine, destroyer, patrolBoat];

  const compcarrier = Ship({
    name: 'carrier',
    length: 5,
    imgArrV: ['top', 'mid', 'mid', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'mid-h', 'mid-h', 'bottom-h'],
  });
  const compbattleship = Ship({
    name: 'battleship',
    length: 4,
    imgArrV: ['top', 'mid', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'mid-h', 'bottom-h'],
  });
  const compsubmarine = Ship({
    name: 'submarine',
    length: 3,
    imgArrV: ['top', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'bottom-h'],
  });
  const compdestroyer = Ship({
    name: 'submarine',
    length: 3,
    imgArrV: ['top', 'mid', 'bottom'],
    imgArrH: ['top-h', 'mid-h', 'bottom-h'],
  });
  const comppatrolBoat = Ship({
    name: 'patrolBoat',
    length: 2,
    imgArrV: ['top', 'bottom'],
    imgArrH: ['top-h', 'bottom-h'],
  });

  const compShips = [compcarrier, compbattleship, compsubmarine, compdestroyer, comppatrolBoat];

  const player = Player({ id: 0, name: 'Player', ships: playerShips });
  const computer = Player({ id: 1, name: 'Evil machine', ships: compShips });
  document.getElementById('board-1').innerHTML = '';
  document.getElementById('board-2').innerHTML = '';
  dispInit(player, computer);
}

gameStarter();