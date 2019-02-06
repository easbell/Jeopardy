import domUpdates from "./domUpdates";
import Player from './Player.js';
import Round from './Round.js';
import data from './data.js';
import Clue from "./Clue";
import DailyDouble from "./DailyDouble.js"

class Game {
  constructor() {
    this.currentRound = null;
    this.players = [];
    this.currentPlayer = null;
    this.winner = null;
    this.allCluesInPlay = [];
    this.currentClue = null;
    this.counter = 0;
    this.roundOne = null;
    this.roundTwo = null;
    this.roundThree = null;
  }

  switchPlayer(player) {
    if (player === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else if (player === this.players[1]) {
      this.currentPlayer = this.players[2]
    } else if (player === this.players[2]) {
      this.currentPlayer = this.players[0]
    }
  }

  gatherPlayers(a, b, c) {
    let player1 = new Player(0, a);
    let player2 = new Player(0, b);
    let player3 = new Player(0, c);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
    domUpdates.displayPlayerScore(this.currentPlayer, this);
  }

  getRandomCat() {
    let allCategories = []
    let keys = Object.keys(data.categories);
    do {
      let singleCat = keys[Math.floor(Math.random() * keys.length)];
      if (!allCategories.includes(singleCat)) {
        allCategories.push(singleCat)
      }
    } while (allCategories.length < 9)
    this.roundOne = allCategories.slice(0, 4);
    this.roundTwo = allCategories.slice(4, 8);
    this.roundThree = allCategories.slice(8, 9);
    domUpdates.displayCategories(this.roundOne);
  }

  instantiateClue(dataset) {
    let specificClue = this.allCluesInPlay.find(clue => {
      return clue.categoryId === parseInt(dataset.categoryid) && clue.pointValue === parseInt(dataset.pointvalue);
    });
    if (specificClue.dailyDouble === true) {
      this.currentClue = new DailyDouble(0, specificClue.question, specificClue.pointValue, specificClue.answer, specificClue.categoryId);
      domUpdates.displayDailyDouble()
    } else {
      this.currentClue = new Clue(specificClue.question, specificClue.pointValue, specificClue.answer, specificClue.categoryId);
      domUpdates.displayClue(specificClue.question);
    }
  }

  quitGame() {
    this.allCluesInPlay = [];
    this.players = [];
    this.counter = 0;
    domUpdates.resetPlayersScores();
    domUpdates.toggleSplash();
  }

  submitGuess(input) {
    this.currentClue.correctAnswer(this, input);
    this.switchPlayer(this.currentPlayer);
  }

  initiateRound() {
    if (this.counter === 0) {
      let round = new Round(1)
      this.currentRound = round;
      round.gatherClues(this.roundOne, this);
    } else if (this.counter === 16) {
      let round = new Round(2);
      this.currentRound = round;
      round.gatherClues(this.roundTwo, this);
      domUpdates.setClues(round.cluesRoundTwo);
      domUpdates.displayCategories(this.roundTwo);
      round.changePointRange();
      domUpdates.displayRound(2);
    } else if (this.counter === 32) {
      let round = new Round(3);
      this.currentRound = round;
      round.gatherClues(this.roundThree, this);
      this.currentClue = new Clue(round.cluesRoundThree[0].question, round.cluesRoundThree[0].pointValue, round.cluesRoundThree[0].answer, round.cluesRoundThree[0].categoryId);
      domUpdates.displayRound(3);
      domUpdates.displayRoundThreeWager(this.roundThree[0])
    }
  }

  determineWinner() {
    let winner = this.players.reduce((prev, current) => {
      return (prev.score > current.score) ? prev : current
    })
    domUpdates.displayWinner(winner);
  }

}

export default Game;