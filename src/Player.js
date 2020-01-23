import Gameboard from "./Gameboard";

const Player = ({ name = 'Player', bot = false, ships } = {}) => ({
  name,
  board: Gameboard({ ships }),
  attack(enemy, x, y) {
    enemy.board.receiveAttack(x, y);
  },
});

export default Player;