import Clue from './Clue.js';

class DailyDouble extends Clue {
  constructor(wager) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
  }

  wagerScore() {
    console.log(this)
  }
}