import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js'
import domUpdates from  '../src/domUpdates';
import spies from 'chai-spies';
import DailyDouble from '../src/DailyDouble.js';
chai.use(spies);

chai.spy.on(domUpdates, ['displayErrorTwo', 'displayDailyDouble'], () => true);


describe('DailyDouble', function() {
  // it.skip('should take in a wager and adjust player score', function() {
  //   let game = new Game();

  //   game.gatherPlayers('jim', 'bob', 'jill');

  //   let mimic = {
  //     question: "What MTV plays 24 hours a day",
  //     pointValue: 100,
  //     answer: "music videos",
  //     categoryId: 10,
  //     dailyDouble: true
  //   };

  //   let specificClue = new DailyDouble(0, mimic.question, mimic.pointValue, 
  //     mimic.answer, mimic.categoryId);
  //   expect(domUpdates.displayDailyDouble).to.be.called();
    
  //   specificClue.wagerScore(100, game);
    
  //   specificClue.correctAnswer(game, 'music videos');
  //   expect(game.currentPlayer.score).to.deep.equal(200);
  //   expect(domUpdates.hidePopUp).to.be.called();

  //   specificClue.correctAnswer(game, 'false');
  //   expect(game.currentPlayer.score).to.deep.equal(-100);
  //   expect(domUpdates.changePrompt).to.be.called();
  //   expect(domUpdates.hidePopUp).to.be.called();

  // });

});