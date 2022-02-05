const homepage = {
  domBody: document.querySelector('body'),
  render() {
    this.buildHomepageWrapper();
    this.buildTitle();
    this.buildOverlay();
    this.overlayOff();
    this.buildStartBtn();
  },

  buildHomepageWrapper() {
    this.homepageWrapper = document.createElement('div');
    this.homepageWrapper.id = 'homepage-wrapper';
    this.domBody.append(this.homepageWrapper);
  },

  buildTitle() {
    this.homepageTitle = document.createElement('div');
    this.homepageTitle.id = 'homepage-title';
    this.homepageTitle.textContent = 'BATTLE SHIP';
    this.homepageWrapper.append(this.homepageTitle);
  },

  buildOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'overlay';
    this.overlayText = document.createElement('div');
    this.overlayText.id = 'overlay-text';
    this.overlayText.textContent = 'Computer Wins!';
    this.overlayBtn = document.createElement('button');
    this.overlayBtn.id = 'overlay-btn';
    this.overlayBtn.textContent = 'Play Again';
    this.overlay.append(this.overlayText, this.overlayBtn);
    this.domBody.append(this.overlay);
  },

  overlayOn() {
    this.overlay.style.display = 'block';
    this.overlayText.style.display = 'block';
    this.overlayBtn.style.display = 'block';
  },

  overlayOff() {
    this.overlay.style.display = 'none';
    this.overlayText.style.display = 'none';
    this.overlayBtn.style.display = 'none';
  },

  buildStartBtn() {
    this.startGameBtn = document.createElement('button');
    this.startGameBtn.id = 'start-game-btn';
    this.startGameBtn.textContent = 'Click here to start!';
    this.homepageWrapper.append(this.startGameBtn);
  },

  clearHomepageElements() {
    this.homepageWrapper.remove();
  },
};

export { homepage };
