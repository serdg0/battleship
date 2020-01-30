import Ship from '../Ship';

describe('Ship', () => {
  const ship = Ship({ length: 1, name: 'dummy' });
  it('have a length', () => {
    expect(ship.length).toBe(1);
  });
  it('have a name', () => {
    expect(ship.name).toBe('dummy');
  });
  it('can be hit and lose length', () => {
    ship.hit();
    expect(ship.length).toBe(0);
  });
  it('knows when its sunk', () => {
    expect(ship.isSunk()).toBe(true);
  });
});