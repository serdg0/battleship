import Gameboard from '../Gameboard';
import Ship from '../Ship';

describe('Gameboard', () => {
  const ship = Ship({
    length: 1,
    imgArrV: ['top'],
    imgArrH: ['top-h'],
  });
  const ships = [ship];
  const game = Gameboard({ ships });

  it('creates 10 rows and 10 columns', () => {
    expect(game.grid.length * game.grid[0].length).toBe(10 * 10);
  });
  it('have a grid composed of objects', () => {
    expect(game.grid[0][0]).toMatchObject({ bounded: false, hit: false, ship: null });
  });
  it('receive an attack', () => {
    game.receiveAttack(0, 0);
    expect(game.grid[0][0].hit).toBe(true);
  });
  it('puts a ship in a valid spot', () => {
    game.putShip(ship, 0, 1);
    expect(game.grid[0][1].ship).toBe(ship);
  });
  it('bounds the surrounding valid grids', () => {
    expect(game.grid[0][0].bounded).toBe(true);
    expect(game.grid[1][0].bounded).toBe(true);
    expect(game.grid[1][1].bounded).toBe(true);
    expect(game.grid[0][2].bounded).toBe(true);
    expect(game.grid[0][3].bounded).toBe(false);
    expect(game.grid[2][0].bounded).toBe(false);
  });
  it('have a grid with limits in 10 x 10', () => {
    expect(game.grid[-1]).toBe(undefined);
    expect(game.grid[0][10]).toBe(undefined);
    expect(game.grid[10]).toBe(undefined);
  });
  it('keeps track of missed hits', () => {
    expect(game.missedHits.val()).toBe(1);
    game.receiveAttack(0, 9);
    expect(game.missedHits.val()).toBe(2);
  });
  it('keeps track of ship hits', () => {
    expect(game.hits.val()).toBe(0);
    game.receiveAttack(0, 1);
    expect(game.hits.val()).toBe(1);
  });
  it('keeps track of sunk ships', () => {
    expect(game.sunkShips.val()).toBe(1);
  });
  it('know when all the ships are sank', () => {
    expect(game.AllShipsDown()).toBe(true);
  });
});
