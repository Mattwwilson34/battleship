import { Ship } from './ship.js';

const Gameboard = () => {
  const ships = [];
  const board = Array.from(Array(10), (_) => Array(10).fill(null));
  let allShipsSunk = false;
  const attackHistory = [];

  const placeShip = (x, y, shipID, length) => {
    const ship = Ship(shipID, length);
    ships.push(ship);
    ship.HP.forEach((hitPoint) => {
      // x and y need to be reversed due to 2D array mechanics
      board[y][x] = hitPoint;
      y++;
    });
  };

  /**
   * function to check if move has been made by either player
   * @param {x - coordinate} x
   * @param {y - coordinate} y
   * @returns true if move has mot been made by either player and false if it has been made by either player
   */
  const validateMove = (x, y) => {
    const attackCoords = `${x},${y}`;

    // searches attackHistory for the attackCoords if not found will return -1
    const moveAlreadyMade = attackHistory.indexOf(attackCoords);

    if (moveAlreadyMade === -1) {
      return true;
    } else return false;
  };

  const receiveAttack = (x, y) => {
    // Capture board location
    const target = board[x][y];

    if (validateMove(x, y)) {
      // store attack in history
      attackHistory.push(`${x},${y}`);

      // if attack was a miss then update board with miss
      if (target === null) {
        board[x][y] = 'miss';
        return true;
      } else {
        /**
         * if attack was a hit split target string into an ID and an Index so that they
         * can be used to both find and update the ship object HP array at the correct
         * index and the current board target
         */
        const targetID = target.split(',')[1];
        const hitShip = ships.filter((ship) => ship.shipID === targetID);
        const hitShipIndex = target.split(',')[0];
        hitShip[0].hit(hitShipIndex);
        hitShip[0].sunk = hitShip[0].isSunk(hitShip[0].HP);
        board[x][y] = 'hit';
        return true;
      }
    } else return false;
  };

  const checkIfAllShipsSunk = () => {
    /**
     * searches each ship object in the board.ship array for any false value
     * if none are found then -1 is returned which signals that all ships
     * have been sunk and to return true
     */
    if (ships.findIndex((ship) => ship.sunk === false) !== -1) {
      return false;
    } else return true;
  };

  return {
    ships,
    board,
    attackHistory,
    allShipsSunk,
    placeShip,
    validateMove,
    receiveAttack,
    checkIfAllShipsSunk,
  };
};

export { Gameboard };
