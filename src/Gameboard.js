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
  };
}

const Bounder = (x, y, grid, boundings) => {
  if ((x - 1) >= 0 && grid[x - 1][y].ship == null) {
    boundings.push(grid[x - 1][y]);
  }
  if ((x + 1) < 10 && grid[x + 1][y].ship == null) {
    boundings.push(grid[x + 1][y]);
  }
  if ((y - 1) >= 0 && grid[x][y - 1].ship == null) {
    boundings.push(grid[x][y - 1]);
  }
  if ((y + 1) < 10 && grid[x][y + 1].ship == null) {
    boundings.push(grid[x][y + 1]);
  }
  if ((x - 1) >= 0 && (y + 1) < 10 && grid[x - 1][y + 1].ship == null) {
    boundings.push(grid[x - 1][y + 1]);
  }
  if ((x - 1) >= 0 && (y - 1) >= 0 && grid[x - 1][y - 1].ship == null) {
    boundings.push(grid[x - 1][y - 1]);
  }
  if ((x + 1) < 10 && (y + 1) < 10 && grid[x + 1][y + 1].ship == null) {
    boundings.push(grid[x + 1][y + 1]);
  }
  if ((x + 1) < 10 && (y - 1) >= 0 && grid[x + 1][y - 1].ship == null) {
    boundings.push(grid[x + 1][y - 1]);
  }
  return boundings;
}

const hitAShip = () => {
  return true;
}

const Gameboard = ({ ships }) => ({
  hits: Counter(),
  missedHits: Counter(),
  sunkShips: Counter(),
  ships,
  grid: Array.from(Array(10), x => Array.from(Array(10), x => Coordinate())),
  putShip(ship, x, y, hor = true) {
    let pos = ship.length;
    let posC = pos;
    let posD = pos;
    let xC = x;
    let xD = x;
    let yC = y;
    let yD = y;
    let boundings = [];
    let spaceAvailable = true;
    if (hor) {
      while (posD > 0) {
        if (yD > 9 || (this.grid[x][yD].bounded || this.grid[x][yD].ship != null)) {
          spaceAvailable = false;
        }
        yD += 1;
        posD -= 1;
      }
      if (spaceAvailable) {
        while (posC > 0) {
          this.grid[xC][yC].ship = ship;
          posC -= 1;
          yC += 1;
        }
        while (pos > 0) {
          boundings = Bounder(x, y, this.grid, boundings);
          boundings.map(b => b.bounded = true);
          y += 1;
          pos -= 1;
        }
      } else return false;
    } else {
      while (posD > 0) {
        if (xD > 9 || (this.grid[xD][y].bounded || this.grid[xD][y].ship != null)) {
          spaceAvailable = false;
        }
        xD += 1;
        posD -= 1;
      }
      if (spaceAvailable) {
        while (posC > 0) {
          this.grid[xC][yC].ship = ship;
          posC -= 1;
          xC += 1;
        }
        while (pos > 0) {
          boundings = Bounder(x, y, this.grid, boundings);
          boundings.map(b => b.bounded = true);
          x += 1;
          pos -= 1;
        }
      } else return false;
    }
    return true;
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
        console.log('ship sunk********************************************');
        this.sunkShips.sum();
      }
      console.log(`${x},${y} Hit Total hits: ${this.hits.val()}`);
      this.lastHit = true;
    } else {
      this.missedHits.sum();
      console.log(`${x},${y} Miss Hit. Total missed: ${this.missedHits.val()}`);
      this.lastHit = false;
    };
  },
  AllShipsDown() {
    console.log(`Length: ${this.ships.length} sunk : ${this.sunkShips.val()}`);
    return this.ships.length === this.sunkShips.val();
  },
  lastHit: false,
})

export default Gameboard;