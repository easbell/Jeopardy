import domUpdates from './domUpdates.js'

class Clue {
  constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
  }

  correctAnswer(game, input) {
    if (input.toLowerCase() === this.answer.toLowerCase()) {
      game.currentPlayer.changeScore(this.pointValue, game);
      domUpdates.hidePopUp();
    } else {
      game.currentPlayer.changeScore(-Math.abs(this.pointValue), game);
      domUpdates.changePrompt(this.answer);
      setTimeout(() => {
        domUpdates.hidePopUp();
      }, 100);
    }
  }

  roundThreeAnswer(game, inputs) {
    if (inputs[0].toLowerCase() === this.answer.toLowerCase()) {
      game.players[0].changeScore(this.pointValue, game)
    } 
    if (inputs[1].toLowerCase() === this.answer.toLowerCase()) {
      game.players[1].changeScore(this.pointValue, game)
    } 
    if (inputs[2].toLowerCase() === this.answer.toLowerCase()) {
      game.players[2].changeScore(this.pointValue, game)
    }
  }
}

export default Clue;