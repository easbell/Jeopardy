import Clue from './Clue.js';
import domUpdates from './domUpdates.js';

class RoundThree extends Clue {
  constructor(wager, question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
    this.playerOnePoints = null;
    this.playerTwoPoints = null;
    this.playerThreePoints = null;
  }

  roundThreeWagers(game, a, b, c) {
    this.playerOnePoints = this.pointValue + parseInt(a);
    this.playerTwoPoints = this.pointValue + parseInt(b);
    this.playerThreePoints = this.pointValue + parseInt(c);
    domUpdates.displayRoundThreeClue(game.currentRound.cluesRoundThree[0]
      .question);
  }

  roundThreeAnswer(game, inputs) {
    if (inputs[0].toLowerCase() === game.currentRound.cluesRoundThree[0]
      .answer.toLowerCase()) {
      game.players[0].changeScore(this.playerOnePoints, game)
    } 
    if (inputs[1].toLowerCase() === game.currentRound.cluesRoundThree[0]
      .answer.toLowerCase()) {
      game.players[1].changeScore(this.playerTwoPoints, game)
    } 
    if (inputs[2].toLowerCase() === game.currentRound.cluesRoundThree[0]
      .answer.toLowerCase()) {
      game.players[2].changeScore(this.playerThreePoints, game)
    }
    domUpdates.displayPlayerScore(game.players[0], game)
    domUpdates.displayPlayerScore(game.players[1], game)
    domUpdates.displayPlayerScore(game.players[2], game)
    game.determineWinner();
  }
}



export default RoundThree;