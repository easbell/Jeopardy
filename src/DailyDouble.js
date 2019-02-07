import Clue from './Clue.js';
import domUpdates from './domUpdates.js';

class DailyDouble extends Clue {
  constructor(wager, question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
  }

  wagerScore(wager, game) {
    if (game.currentPlayer.score <= 0) {
      wager = 0;
      this.pointValue += parseInt(wager);
      domUpdates.displayErrorTwo();
      setTimeout(() => {
        domUpdates.hidePopUp();
        domUpdates.displayClue(this.question);
      }, 2000);
    } else if (wager <= game.currentPlayer.score) {
      this.pointValue += parseInt(wager);
      domUpdates.hidePopUp();
      domUpdates.displayClue(this.question);
    } else {
      domUpdates.displayError();
    }
  }
}

export default DailyDouble;