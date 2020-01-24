import Gameboard from "./Gameboard";

const Player = ({ name = 'Player', ships, id = 0} = {}) => ({
  name,
  id,
  attackLog: [],
  board: Gameboard({ ships }),
  attack(enemy, x, y) {
    this.attackLog.push([x, y]);
    enemy.board.receiveAttack(x, y);
  }, 
});

export default Player;