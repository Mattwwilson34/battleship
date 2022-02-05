import { gameboardDomHandler } from './gameboard-dom-handler';

const shipsDomHandler = {
  body: document.querySelector('body'),
  containerArray: [],
  shipsArray: [],
  playerBoardSquares: document.getElementById('player-board-container'),

  shipsLeftToPlaceOnBoard: 5,

  shipLengths: {
    carrierLength: 5,
    battleshipLength: 4,
    cruiserLength: 3,
    submarine: 3,
    destroyer: 2,
  },

  render() {
    this.placeComputerShips();
    this.buildShipsWrapper();
    this.buildShipContainers();
    this.appendShipContainers();
    this.appendShipsWrapper();
    this.buildShips();
    this.setPlayerBoardSquareDragEvents();
    this.setShipContainerEvents();
  },

  placeComputerShips() {
    const computerBoard = gameboardDomHandler.computerBoard;
    const computerShipYard = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };
    for (let prop in computerShipYard) {
      const shipLength = computerShipYard[prop];
      let coords = gameboardDomHandler.computer.generateRandomCoordinates();
      let x = coords.x;
      let y = coords.y;
      while (!this.validateComputerShipPlacement(x, y, shipLength, computerBoard)) {
        coords = gameboardDomHandler.computer.generateRandomCoordinates();
        x = coords.x;
        y = coords.y;
      }
      computerBoard.placeShip(x, y, prop, shipLength);
    }
    this.updateComputerBoardDisplay();
  },

  validateComputerShipPlacement(x, y, shipLength, computerBoard) {
    let shipPlacementValid = true;
    for (let i = 0; i < shipLength; i++) {
      // check if too high
      if (y > 9) {
        shipPlacementValid = false;
        break;
      }
      // check if too low
      if (y < 0) {
        shipPlacementValid = false;
        break;
      }
      // check if ship already there
      if (computerBoard.board[y][x] !== null) {
        shipPlacementValid = false;
        break;
      } else {
        y = +y + 1;
      }
    }
    return shipPlacementValid;
  },

  buildShipsWrapper() {
    this.shipsWrapper = document.createElement('div');
    this.shipsWrapper.id = 'ships-wrapper';
  },

  buildShipContainers() {
    /// divs
    this.carrierContainer = document.createElement('div');
    this.battleshipContainer = document.createElement('div');
    this.cruiserContainer = document.createElement('div');
    this.submarineContainer = document.createElement('div');
    this.destroyerContainer = document.createElement('div');

    /// set ID's
    this.carrierContainer.id = 'carrier-container';
    this.battleshipContainer.id = 'battleship-container';
    this.cruiserContainer.id = 'cruiser-container';
    this.submarineContainer.id = 'submarine-container';
    this.destroyerContainer.id = 'destroyer-container';

    /// set classes
    this.carrierContainer.classList.add('ship-container');
    this.battleshipContainer.classList.add('ship-container');
    this.cruiserContainer.classList.add('ship-container');
    this.submarineContainer.classList.add('ship-container');
    this.destroyerContainer.classList.add('ship-container');

    /// set draggable attribute to true
    this.carrierContainer.setAttribute('draggable', true);
    this.battleshipContainer.setAttribute('draggable', true);
    this.cruiserContainer.setAttribute('draggable', true);
    this.submarineContainer.setAttribute('draggable', true);
    this.destroyerContainer.setAttribute('draggable', true);

    /// push containers into array to make appending HP div elements easier
    this.containerArray.push(
      this.carrierContainer,
      this.battleshipContainer,
      this.cruiserContainer,
      this.submarineContainer,
      this.destroyerContainer
    );
  },

  appendShipsWrapper() {
    this.body.append(this.shipsWrapper);
  },

  appendShipContainers() {
    this.shipsWrapper.append(
      this.carrierContainer,
      this.battleshipContainer,
      this.cruiserContainer,
      this.submarineContainer,
      this.destroyerContainer
    );
  },

  buildShips() {
    for (const property in this.shipLengths) {
      this.shipsArray.push(Array.from(Array(this.shipLengths[property]).fill(null)));
    }
    this.shipsArray.forEach((ship, index) => {
      ship.forEach((shipHP) => {
        const shipSquare = document.createElement('div');
        shipSquare.classList.add('ship-square');
        this.containerArray[index].append(shipSquare);
      });
    });
  },

  setPlayerBoardSquareDragEvents() {
    const boardSquares = [...document.getElementById('player-board-container').children];
    boardSquares.forEach((square) => {
      square.addEventListener('dragenter', this.playerBoardDragEnter);
      square.addEventListener('dragover', this.playerBoardDragOver);
      square.addEventListener('dragleave', this.playerBoardDragLeave);
      square.addEventListener('drop', this.playerBoardDrop.bind(this));
    });
  },

  playerBoardDragEnter(e) {
    e.preventDefault();
  },

  playerBoardDragOver(e) {
    e.target.classList.add('ship-hover-target');
    e.preventDefault();
  },

  playerBoardDragLeave(e) {
    e.target.classList.remove('ship-hover-target');
    e.preventDefault();
  },

  playerBoardDrop(e) {
    e.target.classList.remove('ship-hover-target');
    this.setShipDropCoords(e);
    this.placeShip();
    e.preventDefault();
  },

  setComputerBoardSquareMouseEvents() {
    const boardSquares = [...document.getElementById('computer-board-container').children];
    boardSquares.forEach((square) => {
      square.addEventListener('mouseenter', this.computerBoardMouseenter);
      square.addEventListener('mouseleave', this.computerBoardMouseleave);
    });
  },

  computerBoardMouseenter(e) {
    if (e.target.textContent !== '') {
      e.target.classList.add('invalid-target');
    } else {
      e.target.classList.add('valid-target');
    }
    e.preventDefault();
  },

  computerBoardMouseleave(e) {
    e.target.classList.remove('invalid-target', 'valid-target');
    e.preventDefault();
  },

  setShipContainerEvents() {
    this.containerArray.forEach((container) => {
      container.addEventListener('mousedown', this.getIndexOfShipContainerSquare.bind(this));
      container.addEventListener('mousedown', this.setClickedShipName.bind(this));
    });
  },

  setShipDropCoords(e) {
    const coordsArray = e.target.dataset.arrayIndex.split(',');
    this.shipDropCoords = {
      x: coordsArray[0],
      y: coordsArray[1],
    };
  },

  correctShipDropCoords() {
    const correctedShipDropCoords = this.shipDropCoords.y - this.indexOfSquareClicked;
    this.shipDropCoords.y = correctedShipDropCoords;
  },

  getIndexOfShipContainerSquare(e) {
    this.shipContainer = e.target.parentElement;
    const containerSquares = [...this.shipContainer.children];
    this.indexOfSquareClicked = containerSquares.indexOf(e.target);
    this.lengthOfShipClicked = containerSquares.length;
  },

  setClickedShipName(e) {
    this.clickedShipName = e.target.parentElement.id.split('-')[0];
  },

  placeShip() {
    this.correctShipDropCoords();
    if (this.validateShipPlacement()) {
      this.placeShipOnPlayerboardObject();
      this.updateBoardDisplay();
      this.removePlacedShipFromShipYard();
      this.updateShipsLeft();
    } else this.incorrectShipPlacementMessage();
  },

  updateShipsLeft() {
    this.shipsLeftToPlaceOnBoard -= 1;
    if (this.shipsLeftToPlaceOnBoard === 0) {
      this.shipsWrapper.remove();
      this.body.append(gameboardDomHandler.computerBoardWrapper);
      this.setComputerBoardSquareMouseEvents();
    }
  },

  removePlacedShipFromShipYard() {
    this.shipContainer.remove();
  },

  validateShipPlacement() {
    let shipPlacementValid = true;
    let x = this.shipDropCoords.x;
    let y = this.shipDropCoords.y;
    const shipLength = this.lengthOfShipClicked;

    for (let i = 0; i < shipLength; i++) {
      // check if too high
      if (y > 9) {
        shipPlacementValid = false;
        break;
      }
      // check if too low
      if (y < 0) {
        shipPlacementValid = false;
        break;
      }
      // check if ship already there
      if (gameboardDomHandler.playerBoard.board[y][x] !== null) {
        shipPlacementValid = false;
        break;
      } else {
        y = +y + 1;
      }
    }
    return shipPlacementValid;
  },

  incorrectShipPlacementMessage() {
    return console.log(`Incorrect placement`);
  },

  placeShipOnPlayerboardObject() {
    const x = this.shipDropCoords.x;
    const y = this.shipDropCoords.y;
    const shipLength = this.lengthOfShipClicked;
    const ship = this.clickedShipName;
    gameboardDomHandler.playerBoard.placeShip(x, y, ship, shipLength);
  },

  updateBoardDisplay() {
    gameboardDomHandler.updateBoardDisplay(
      gameboardDomHandler.playerBoard,
      gameboardDomHandler.playerBoardContainer
    );
    this.setPlayerBoardSquareDragEvents();
  },

  updateComputerBoardDisplay() {
    gameboardDomHandler.updateBoardDisplay(
      gameboardDomHandler.computerBoard,
      gameboardDomHandler.computerBoardContainer
    );
  },
};

export { shipsDomHandler };
