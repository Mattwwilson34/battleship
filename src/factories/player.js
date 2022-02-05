import { randomIntFromInterval } from '../utils.js';

const Player = (name, computer = false) => {
  const generateRandomCoordinates = () => {
    let x = randomIntFromInterval(0, 9);
    let y = randomIntFromInterval(0, 9);
    return { x, y };
  };

  /**
   * completes a computer attack which includes generating random coordinates
   * and passing those coordinates to the attack()
   */
  const computerAttack = (gameboard) => {
    let coords = generateRandomCoordinates();
    while (!gameboard.validateMove(coords.x, coords.y)) {
      coords = generateRandomCoordinates();
    }
    attack(coords.x, coords.y, gameboard);
  };

  const attack = (x, y, gameboard) => {
    gameboard.receiveAttack(x, y);
  };

  return {
    name,
    computer,
    generateRandomCoordinates,
    computerAttack,
    attack,
  };
};

export { Player };
