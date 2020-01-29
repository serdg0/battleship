import Player from '../Player';
import Ship from '../Ship'

describe('Player', () => {
    let ship = Ship({length: 1});
    let ships = [ship]
    let player = Player({name: 'dummy', ships})
    let enemy = Player({name: 'foe dummy', ships})

    it ('have a name property', () => {
        expect(player.name).toBe('dummy')
    })
    it ('have ship pieces in an array', () => {
        expect(player.board.ships[0]).toBe(ships[0])
    })
    it ('can attack', () => {
        player.attack(enemy, 0, 0)
        expect(enemy.board.grid[0][0].hit).toBe(true)
    })
})