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
  putShip(ship, x, y, hor = true) {
    let pos = ship.length;
    let posC = pos;
    let xC = x;
    let yC = y;
    let boundings = [];
    if (hor) {
      while (posC > 0) {
        this.grid[xC][yC].ship = ship;
        posC -= 1;
        yC += 1;
      }
      while (pos > 0) {
        if ((x - 1) > 0 && this.grid[x - 1][y].ship == null) {
          boundings.push(this.grid[x - 1][y]);
        }
        if ((x + 1) < 10 && this.grid[x + 1][y].ship == null) {
          boundings.push(this.grid[x + 1][y]);
        }
        if ((y - 1) > 0 && this.grid[x][y - 1].ship == null) {
          boundings.push(this.grid[x][y - 1]);
        }
        if ((y + 1) < 10 && this.grid[x][y + 1].ship == null) {
          boundings.push(this.grid[x][y + 1]);
        }
        if ((x - 1) > 0 && (y + 1) < 10 && this.grid[x - 1][y + 1].ship == null) {
          boundings.push(this.grid[x - 1][y + 1]);
        }
        if ((x - 1) > 0 && (y - 1) > 0 && this.grid[x - 1][y - 1].ship == null) {
          boundings.push(this.grid[x - 1][y - 1]);
        }
        if ((x + 1) < 10 && (y + 1) < 10 && this.grid[x + 1][y + 1].ship == null) {
          boundings.push(this.grid[x + 1][y + 1]);
        }
        if ((x + 1) < 10 && (y - 1) > 0 && this.grid[x + 1][y - 1].ship == null) {
          boundings.push(this.grid[x + 1][y - 1]);
        }
        boundings.map(b => b.bounded = true);
        y += 1;
        pos -= 1;
      }
    } else {
      while (posC > 0) {
        this.grid[xC][yC].ship = ship;
        posC -= 1;
        xC += 1;
      }
      while (pos > 0) {
        if ((x - 1) > 0 && this.grid[x - 1][y].ship == null) {
          boundings.push(this.grid[x - 1][y]);
        }
        if ((x + 1) < 10 && this.grid[x + 1][y].ship == null) {
          boundings.push(this.grid[x + 1][y]);
        }
        if ((y - 1) > 0 && this.grid[x][y - 1].ship == null) {
          boundings.push(this.grid[x][y - 1]);
        }
        if ((y + 1) < 10 && this.grid[x][y + 1].ship == null) {
          boundings.push(this.grid[x][y + 1]);
        }
        if ((x - 1) > 0 && (y + 1) < 10 && this.grid[x - 1][y + 1].ship == null) {
          boundings.push(this.grid[x - 1][y + 1]);
        }
        if ((x - 1) > 0 && (y - 1) > 0 && this.grid[x - 1][y - 1].ship == null) {
          boundings.push(this.grid[x - 1][y - 1]);
        }
        if ((x + 1) < 10 && (y + 1) < 10 && this.grid[x + 1][y + 1].ship == null) {
          boundings.push(this.grid[x + 1][y + 1]);
        }
        if ((x + 1) < 10 && (y - 1) > 0 && this.grid[x + 1][y - 1].ship == null) {
          boundings.push(this.grid[x + 1][y - 1]);
        }
        boundings.map(b => b.bounded = true);
        x += 1;
        pos -= 1;
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