import './style/style.css';
import '../node_modules/dragula/dist/dragula.css';
import { Player } from './factories/player.js';
import { Gameboard } from './factories/gameboard.js';
import { gameboardDomHandler } from './modules/gameboard-dom-handler.js';
import { shipsDomHandler } from './modules/ships-dom-handler.js';
import { homepage } from './modules/homepage-dom-handler.js';

const init = () => {
  /// build players
  const player = Player('Matt', false);
  const computer = Player('Computer', true);

  /// build boards
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  homepage.render();

  homepage.startGameBtn.addEventListener('click', (e) => {
    homepage.clearHomepageElements();

    /// start game by displaying player board
    gameboardDomHandler.render(playerBoard, computerBoard, player, computer);

    /// set placeable ships number
    shipsDomHandler.shipsLeftToPlaceOnBoard = 5;

    /// render draggable ships
    shipsDomHandler.render();

    // /// allows player to initiate game by attacking the computer board by clicking on board square
    gameboardDomHandler.bindClickAttackEvents(
      computerBoard,
      gameboardDomHandler.computerBoardContainer
    );
  });

  return 1;
};

init();

export { init };
