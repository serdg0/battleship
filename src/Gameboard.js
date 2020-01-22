const Coordinate = ({ ship = null, hit = false } = {}) => ({
  ship,
  hit,
})

const Gameboard = ({ ships = ships } = {}) => ({
  hits: 0,
  sunkShips: 0,
  ships,
  grid: Array.from(Array(10), x => Array.from(Array(10), x => Coordinate())),
  putShip(ship, x, y) {
    let pos = ship.length;
    while (pos > 0) {
      this.grid[x][y].ship = ship;
      pos -= 1;
      y += 1;
    }
    return this;
  },
  receiveAttack(x, y) {
    const coord = this.grid[x][y];
    if (coord.hit === false) {
      coord.hit = true;
      this.hits += 1;
    }
    if (coord.ship != null) {
      coord.ship.hit();
      if (coord.ship.isSunk()) {
        this.sunkShips += 1;
      }
    }
    console.log(`${x},${y}`);
  },
  AllShipsDown() {
    return this.ships.length == this.sunkShips;
  }
})

export default Gameboard;