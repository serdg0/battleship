import Ship from './Ship';
import dispInit from './dom';
import Player from './Player';
import './assets/css/style.css';

//compPosition(computer.board);


function gameStarter() {
  const carrier = Ship({ name: 'carrier', length: 5 });
  const battleship = Ship({ name: 'battleship', length: 4 });
  const submarine = Ship({ name: 'submarine', length: 3 });
  const destroyer = Ship({ name: 'destroyer', length: 3 });
  const patrolBoat = Ship({ name: 'patrolBoat', length: 2 });

  const ships = [carrier, battleship, submarine, destroyer, patrolBoat];

  const compcarrier = Ship({ name: 'carrier', length: 5 });
  const compbattleship = Ship({ name: 'battleship', length: 4 });
  const compsubmarine = Ship({ name: 'submarine', length: 3 });
  const compdestroyer = Ship({ name: 'destroyer', length: 3 });
  const comppatrolBoat = Ship({ name: 'patrolBoat', length: 2 });

  const compships = [compcarrier, compbattleship, compsubmarine, compdestroyer, comppatrolBoat];

  const player = Player({ id: 0, name: 'Player', ships: ships });
  const computer = Player({ id: 1, name: 'Evil machine', ships: compships });
  dispInit(player, computer);
}

gameStarter();

export default gameStarter;