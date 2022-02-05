import { init } from '../index.js';
import { homepage } from './homepage-dom-handler.js';
import { shipsDomHandler } from './ships-dom-handler.js';

const gameboardDomHandler = {
  // Store Dom Body for easy access
  domBody: document.querySelector('body'),
  // Render all elements
  render(playerBoard, computerBoard, player, computer) {
    this.player = player;
    this.computer = computer;
    this.playerBoard = playerBoard;
    this.computerBoard = computerBoard;
    this.buildWrappers();
    this.buildTitles();
    this.buildContainers();
    this.buildBoard(playerBoard, this.playerBoardContainer);
    this.buildBoard(computerBoard, this.computerBoardContainer);
    this.appendTitles();
    this.appendContainers();
    this.appendWrappers();
  },

  buildWrappers() {
    /// gameboardsWrapper
    this.gameboardsWrapper = document.createElement('div');
    this.gameboardsWrapper.id = 'gameboards-wrapper';

    /// player board wrapper
    this.playerBoardWrapper = document.createElement('div');
    this.playerBoardWrapper.classList.add('board-wrapper');
    this.playerBoardWrapper.id = 'player-board-wrapper';
    /// computer board wrapper
    this.computerBoardWrapper = document.createElement('div');
    this.computerBoardWrapper.classList.add('board-wrapper');
    this.computerBoardWrapper.id = 'computer-board-wrapper';
  },

  buildTitles() {
    /// player board wrapper
    this.playerBoardTitle = document.createElement('div');
    this.playerBoardTitle.classList.add('board-title');
    this.playerBoardTitle.id = 'player-board-title';
    this.playerBoardTitle.innerText = 'Player Board';
    /// computer board Title
    this.computerBoardTitle = document.createElement('div');
    this.computerBoardTitle.classList.add('board-title');
    this.computerBoardTitle.id = 'computer-board-title';
    this.computerBoardTitle.innerText = 'Computer Board';
  },

  buildContainers() {
    /// player board container
    this.playerBoardContainer = document.createElement('div');
    this.playerBoardContainer.classList.add('board-container');
    this.playerBoardContainer.id = 'player-board-container';
    /// computer board container
    this.computerBoardContainer = document.createElement('div');
    this.computerBoardContainer.classList.add('board-container');
    this.computerBoardContainer.id = 'computer-board-container';
  },

  buildBoard(gameboard, container) {
    const board = gameboard.board;
    board.forEach((row, i) => {
      row.forEach((rowElement, j) => {
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('board-square');
        boardSquare.dataset.arrayIndex = `${j},${i}`;
        container.append(boardSquare);
        this.styleSquare(rowElement, boardSquare);
      });
    });
  },

  styleSquare(rowElement, boardSquare) {
    const boardID = boardSquare.parentElement.id;
    if (boardID === 'computer-board-container') {
      if (rowElement === 'hit') {
        boardSquare.classList.add('board-square-hit');
        boardSquare.innerText = 'X';
      } else if (rowElement === 'miss') {
        boardSquare.innerText = 'X';
      }
    } else {
      if (rowElement !== null && rowElement !== 'miss' && rowElement !== 'hit') {
        boardSquare.classList.add('board-square-player');
      } else if (rowElement === 'hit') {
        boardSquare.classList.add('board-square-hit');
        boardSquare.innerText = 'X';
      } else if (rowElement === 'miss') {
        boardSquare.innerText = 'X';
      }
    }
  },

  appendTitles() {
    this.playerBoardWrapper.append(this.playerBoardTitle);
    this.computerBoardWrapper.append(this.computerBoardTitle);
  },

  appendContainers() {
    this.playerBoardWrapper.append(this.playerBoardContainer);
    this.computerBoardWrapper.append(this.computerBoardContainer);
    this.domBody.append(this.playerBoardWrapper);
  },

  appendWrappers() {
    this.gameboardsWrapper.append(this.playerBoardWrapper);
    this.domBody.append(this.gameboardsWrapper);
  },

  bindClickAttackEvents(gameboard, container) {
    const domBoardSquares = [...container.children];
    domBoardSquares.forEach((square) => {
      square.addEventListener(
        'click',
        this.clickAttack.bind({ gameboard, container, domBoardSquares })
      );
    });
  },

  /**
   * @param {this} this - refers to the bound object { gameboard, container, domBoardSquares } from bindClickAttacks()
   * @param {event} e - refers to the clicked on gameboard square dom element which should be a div
   */
  clickAttack(event) {
    /// player attack
    if (
      gameboardDomHandler.initPlayerAttack(
        event,
        this.domBoardSquares,
        this.gameboard,
        this.container
      )
    ) {
      /// check if all ships on computer board have been sunk
      if (this.gameboard.checkIfAllShipsSunk()) {
        gameboardDomHandler.gameOver('Player');
        return;
      }

      /// computer attack follows
      gameboardDomHandler.initComputerAttack();

      /// check if all ships on player board have been sunk
      if (gameboardDomHandler.playerBoard.checkIfAllShipsSunk()) {
        gameboardDomHandler.gameOver('Computer');
        return;
      }

      /// adds click events to computer board so that player can make their next attack
      const boardContainerVariableName = gameboardDomHandler.getBoardContainerVariableName(
        this.container
      );
      gameboardDomHandler.bindClickAttackEvents(
        this.gameboard,
        gameboardDomHandler[boardContainerVariableName]
      );

      shipsDomHandler.setComputerBoardSquareMouseEvents();
    }
  },

  initPlayerAttack(event, domBoardSquares, playerBoard, container) {
    const coords = gameboardDomHandler.getCoordinatesFromDomBoard(event.target, domBoardSquares);

    if (!playerBoard.receiveAttack(coords.x, coords.y)) {
      /// tell user attack is invalid
      return;
    } else {
      /// player attack goes through and computer board is updated
      gameboardDomHandler.updateBoardDisplay(playerBoard, container);
      return true;
    }
  },

  initComputerAttack() {
    this.computer.computerAttack(this.playerBoard);
    this.updateBoardDisplay(this.playerBoard, this.playerBoardContainer);
  },

  getCoordinatesFromDomBoard(target, domBoardSquares) {
    const coords = domBoardSquares.indexOf(target).toString();
    let x = 0;
    let y = 0;
    if (coords.length < 2) {
      y = coords[0];
    } else {
      x = coords[0];
      y = coords[1];
    }
    return { x, y };
  },

  getBoardContainerId(container) {
    if (container.id === 'player-board-container') {
      return 'player-board-container';
    } else {
      return 'computer-board-container';
    }
  },

  getBoardContainerVariableName(container) {
    if (container.id === 'player-board-container') {
      return 'playerBoardContainer';
    } else {
      return 'computerBoardContainer';
    }
  },

  buildNewBoardContainer(newBoardContainerName, newBoardContainerId) {
    this[`${newBoardContainerName}`] = document.createElement('div');
    this[`${newBoardContainerName}`].classList.add('board-container');
    this[`${newBoardContainerName}`].id = newBoardContainerId;
  },

  /**
   *
   * @param {object} board - the gameboard that is to be updated/removed from the DOM
   * @param {dom element div} container - will hold the newly created gameboard sqaures
   */
  updateBoardDisplay(board, container) {
    // builds a new container to hold new gameboard squares so that they can be appended to the dom after the old board is removed
    const newBoardContainerName = this.getBoardContainerVariableName(container);
    const newBoardContainerId = this.getBoardContainerId(container);
    this.buildNewBoardContainer(newBoardContainerName, newBoardContainerId);
    this.buildBoard(board, this[`${newBoardContainerName}`]);

    container.remove();

    if (newBoardContainerId === 'player-board-container') {
      this.playerBoardWrapper.append(this[`${newBoardContainerName}`]);
    } else this.computerBoardWrapper.append(this[`${newBoardContainerName}`]);
  },

  gameOver(winner) {
    const gameBoardsWrapper = document.getElementById('gameboards-wrapper');
    const computerBoardWrapper = document.getElementById('computer-board-wrapper');
    const overlay = document.getElementById('overlay');

    homepage.overlayText.innerText = `${winner} Wins!`;
    homepage.overlayBtn.addEventListener('click', (e) => {
      gameBoardsWrapper.remove();
      computerBoardWrapper.remove();
      overlay.remove();
      init();
    });
    homepage.overlayOn();
  },
};

export { gameboardDomHandler };
