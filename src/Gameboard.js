const Coordinate = ({ ship = null, hit = false } = {}) => ({
  ship,
  hit,
})

const Counter = () => {
  let counter = 0;
  return {
    sum: () => counter += 1,
    val: () => counter
  }
}

const Gameboard = ({ ships }) => ({
  hits: Counter(),
  sunkShips: Counter(),
  ships,
  grid: Array.from(Array(10), x => Array.from(Array(10), x => Coordinate())),
  putShip(ship, x, y, ver = false) {
    let pos = ship.length;
    if (ver) {
      while (pos > 0) {
        this.grid[x][y].ship = ship;
        pos -= 1;
        x += 1;
      }
    } else {
      while (pos > 0) {
        this.grid[x][y].ship = ship;
        pos -= 1;
        y += 1;
      }
    }
    return this;
  },
  receiveAttack(x, y) {
    const coord = this.grid[x][y];
    if (coord.hit === false) {
      coord.hit = true;
      this.hits.sum();
    }
    if (coord.ship != null) {
      coord.ship.hit();
      if (coord.ship.isSunk()) {
        this.sunkShips.sum();
      }
      console.log(`${x},${y} Hit`);
    } else console.log(`${x},${y} Miss Hit`);
  },
  AllShipsDown() {
    return this.ships.length === this.sunkShips;
  }
})

export default Gameboard;