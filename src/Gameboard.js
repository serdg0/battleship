const Coordinate = ({ ship = null, hit = false, bounded = false } = {}) => ({
  ship,
  hit,
  bounded,
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
  missedHits: Counter(),
  sunkShips: Counter(),
  ships,
  grid: Array.from(Array(10), x => Array.from(Array(10), x => Coordinate())),
  putShip(ship, x, y, ver = false) {
    if (this.grid[x][y].ship != null || this.grid[x][y].bounded == true){
      return '';
    }
    let pos = ship.length;

    if (ver) {
      while (pos > 0) {
        let boundings =  [this.grid[x-1][y], this.grid[x+1][y], this.grid[x][y-1], this.grid[x][y+1], this.grid[x-1][y+1], this.grid[x-1][y-1], this.grid[x+1][y+1], this.grid[x+1][y-1]]
        boundings.map(realCoords => {
          realCoords.bounded = true;
        })
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
    }
    if (coord.ship != null) {
      coord.ship.hit();
      this.hits.sum();
      if (coord.ship.isSunk()) {
        this.sunkShips.sum();
      }
      console.log(`${x},${y} Hit Total hits: ${this.hits.val()}`);
    } else {
      this.missedHits.sum();
      console.log(`${x},${y} Miss Hit. Total missed: ${this.missedHits.val()}`)
    };
  },
  AllShipsDown() {
    return this.ships.length === this.sunkShips;
  }
})

export default Gameboard;