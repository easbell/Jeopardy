import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js'
import domUpdates from  '../src/domUpdates';
import RoundThree from '../src/RoundThree.js'
import spies from 'chai-spies';
import Round from '../src/Round.js';
chai.use(spies);

chai.spy.on(domUpdates, ['displayRoundThreeClue'], () => true);

describe('RoundThree', function() {
  let mimic;
  let clue;
  let game;
  beforeEach(function() {
    game = new Game();
    mimic = {
      question: "What MTV plays 24 hours a day",
      pointValue: 100,
      answer: "music videos",
      categoryId: 10
    };
    clue = new RoundThree(0, mimic.question, mimic.pointValue, mimic.answer, mimic.categoryId);
  });
      
      it('Should have default properties', function() {

        expect(clue.wager).to.deep.equal(clue.wager);
        expect(clue.playerOnePoints).to.deep.equal(null);
        expect(clue.playerTwoPoints).to.deep.equal(null);
        expect(clue.playerThreePoints).to.deep.equal(null);
      });
      
  it('should gather player wagers', function() {
    game.currentRound = new Round(3)
    game.currentRound.cluesRoundThree = [mimic];
    clue.roundThreeWagers(game, '100', '200', '300');
    expect(clue.playerOnePoints).to.deep.equal(200);
    expect(clue.playerTwoPoints).to.deep.equal(300);
    expect(clue.playerThreePoints).to.deep.equal(400);
  });
});