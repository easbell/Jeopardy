// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import $ from 'jquery';

import './css/base.css';
import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Round from './Round.js';
import Clue from './Clue.js';
import DailyDouble from './DailyDouble.js';

//  Tell webpack to use an image (link to it in index.html)
let game = new Game();

$('.start--btn').on('click', () => {
  let one = $('.player--input1').val();
  let two = $('.player--input2').val();
  let three = $('.player--input3').val();
  if (one.length === 0) {
    one = 'Player1';
  }
  if (two.length === 0) {
    two = 'Player2';
  }
  if (three.length === 0) {
    three = 'Player3';
  }
  game.gatherPlayers(one, two, three);
  domUpdates.displayPlayers(one, two, three);
  domUpdates.toggleSplash();
  domUpdates.enableReset();
  game.getRandomCat();
  game.initiateRound();
});


$('.game--exit').on('click', () => {
  game.quitGame();
  domUpdates.disableReset();
});

$('.game--board').on('click', (event) => {
  let dataset = event.target.dataset;
  if ($(event.target).is('h4')) {
    game.instantiateClue(dataset);
  }
  domUpdates.removeTile(event.target);
});

$('body').on('click', '.submit--wager', () => {
  let playWager = $('.submit--wager').prev().val();
  game.currentClue.wagerScore(playWager);
});

$('body').on('click', '.submit--guess', () => {
  let playInput = $('.submit--guess').prev().val();
  game.submitGuess(playInput);
  game.counter++;
  game.initiateRound();
});

$('body').on('click', '.submit--wager--round--three', () => {
  let playerOneWager = $('.wager--player--one').val();
  let playerTwoWager = $('.wager--player--two').val();
  let playerThreeWager = $('.wager--player--three').val();
  game.currentRound.roundThreeWagers(playerOneWager, playerTwoWager, playerThreeWager )
});

$('body').on('click', '.submit--answer--round--three', () => {
  let playerOneAnswer = $('.answer--player--one').val();
  let playerTwoAnswer = $('.answer--player--two').val();
  let playerThreeAnswer = $('.answer--player--three').val();
  game.currentClue.roundThreeAnswer(game, [playerOneAnswer, playerTwoAnswer, playerThreeAnswer])
});