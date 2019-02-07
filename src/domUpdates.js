import $ from 'jquery';

const domUpdates = {

  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },

  displayPlayers: (a, b, c) => {
    $('.player--one').text(a);
    $('.player--two').text(b);
    $('.player--three').text(c);
  },

  displayPlayerScore: (currentplayer, game) => {
    if (currentplayer === game.players[0]) {
      $('.player--one--score').text(currentplayer.score);
    } else if (currentplayer === game.players[1]) {
      $('.player--two--score').text(currentplayer.score);
    } else {
      $('.player--three--score').text(currentplayer.score);
    }
  },

  resetPlayersScores: () => {
    $('.player--one--score').text(0);
    $('.player--two--score').text(0);
    $('.player--three--score').text(0);
  },

  displayRound: (num) => {
    $('.game--round').text(`Round: ${num}`)
  },

  enableReset: () => {
    $('.game--exit').prop( "disabled", false);
  },

  disableReset: () => {
    $('.game--exit').prop( "disabled", true);
  },

  setClues: (clues) => {
    $('.game--board').empty();
    clues.forEach(clue => {
      $('.game--board').append(`
        <h4
        data-categoryid="${clue.categoryId}" 
        data-pointvalue="${clue.pointValue}"
        disabled="false">
        ${clue.pointValue}
        </h4>`)
    });
  },

  displayCategories: (array) => {
    $('.category--one').text(array[0].split(/(?=[A-Z])/).join(' '));
    $('.category--two').text(array[1].split(/(?=[A-Z])/).join(' '));
    $('.category--three').text(array[2].split(/(?=[A-Z])/).join(' '));
    $('.category--four').text(array[3].split(/(?=[A-Z])/).join(' '));
  },
  
  displayDailyDouble: () => {
    $('.game--container').toggleClass('game--inactive');
    $('body').append(`
    <div class="popup--container">
      <h2 class="popup--question">You got a DAILY DOUBLE!</h2>
      <h5>Please enter your wager:</h5>
      <h5 class="wager--error error--hidden">Wager can not be greater than current score</h5>
      <input class="wager--input wager" type="text" placeholder="Place Wager Here"/>
      <button class="submit--wager">Submit Wager</button>
    </div>
    `);
  },

  displayClue: (question) => {
    $('.game--container').toggleClass('game--inactive');
    $('body').append(`
    <div class="popup--container clue--container">
      <h2 class="popup--question">${question}</h2>
      <input class="popup--input" type="text" placeholder="Place Answer Here"/>
      <button class="submit--guess">Submit Guess</button>
    </div>
    `);
  },
  
  hidePopUp: () => {
    $('.game--container').toggleClass('game--inactive');
    $('.popup--container').remove();
  },

  removeTile: (tile) => {
    if ($(tile).is('h4')) {
      $(tile).text('');
      $(tile).addClass('used--tile');
    }
  },

  changePrompt: (answer) => {
    $('.popup--question').text(`the answer is "${answer}"`);
    $('.popup--input').css('display', 'none');
    $('.submit--guess').css('display', 'none');
  },

  displayRoundThreeWager: (category) => {
    $('.category--header').empty();
    $('.game--board').replaceWith(`
    <div class="round--three--wager">
      <h2>Your category for round three is: ${category}</h2>
      <h3>Please submit your wagers.</h3>
      <input type="text" placeholder="Wager" class="wager--player--one">
      <input type="text" placeholder="Wager" class="wager--player--two">
      <input type="text" placeholder="Wager" class="wager--player--three">
      <button class="submit--wager--round--three">Submit All Wagers</button>
    </div>`);
  },
    
  displayError: () => {
    $('.wager--error').removeClass('error--hidden');
    $('.wager--error').addClass('error--displayed');
  },

  displayCurrentPlayer: (currentPlayer, lastPlayer) => {
    $(`.${currentPlayer}--container`).css('box-shadow', '10px 10px pink');
    $(`.${lastPlayer}--container`).css('box-shadow', '');
  },

  displayRoundThreeClue: (question) => {
    $('.round--three--wager').replaceWith(`
    <div class="round--three">
      <h2>${question}</h2>
      <h3>Please submit your answers.</h3>
      <input type="text" placeholder="Answer" class="answer--player--one">
      <input type="text" placeholder="Answer" class="answer--player--two">
      <input type="text" placeholder="Answer" class="answer--player--three">
      <button class="submit--answer--round--three">Submit All Answers</button>
    </div>`);
  }
  
}

export default domUpdates;