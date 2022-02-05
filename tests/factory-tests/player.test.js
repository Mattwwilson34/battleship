import { Player } from '../../src/factories/player.js';
import { Gameboard } from '../../src/factories/gameboard.js';

test('Player factory returns object with expected values', () => {
  const player1 = Player('player1', false);

  expect(player1).toHaveProperty('name', 'player1');
  expect(player1).toHaveProperty('computer', false);
});

test('generateRandomCoordinates() returns random number between 0-9', () => {
  const player = Player('player1', false);
  const coords = player.generateRandomCoordinates();

  expect(coords.x).toBeGreaterThanOrEqual(0);
  expect(coords.x).toBeLessThan(10);
  expect(coords.y).toBeGreaterThanOrEqual(0);
  expect(coords.y).toBeLessThan(10);
});

test('computerAttack() completes a random attack that has not yet been made', () => {
  const computer = Player('player1', true);
  const player1Gameboard = Gameboard();

  computer.computerAttack(player1Gameboard);
  expect(player1Gameboard.attackHistory).toBeInstanceOf(Array);
  expect(player1Gameboard.attackHistory).toHaveLength(1);
});

test('attack() completes an attack from x/y coordinates if the move has not been made before', () => {
  const player1 = Player('player1', false);
  const computerGameboard = Gameboard();
  player1.attack(0, 0, computerGameboard);
  expect(computerGameboard.attackHistory).toEqual(['0,0']);
});
