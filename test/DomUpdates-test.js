import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, ['toggleSplash', 'displayPlayers'], () => true);

describe('domUpdates', function() {
  it('should hide splash screen', function() {
    domUpdates.toggleSplash();

    expect(domUpdates.toggleSplash).to.be.called(1);
  });

  it('should display player\'s names upon start of game', function() {
    domUpdates.displayPlayers(['a', 'b', 'b']);

    expect(domUpdates.displayPlayers).to.be.called(1);
  })
  
});