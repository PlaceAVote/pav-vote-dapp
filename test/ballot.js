contract('Ballot', function(accounts) {

  it("Assert new Ballot is initialized correctly with correct bill information", function(done) {
    var chairperson = accounts[0];
    var billNumber = 542;
    var billCongress = 114;
    var billType = "hr";

    Ballot.new(billNumber, billCongress, billType, {gas: 267537}).then(function(ballot) {
        ballot.chairperson.call().then(function(chair) {
          assert.equal(chair, chairperson, "Chairperson was not initialized correctly");
        });
        ballot.getBillNumber.call().then(function(number) {
          assert.equal(number, billNumber, "Bill numbers do not match");
        });
        ballot.getCongress.call().then(function(congress) {
          assert.equal(congress, billCongress, "Bill Congress numbers do not match");
        });
    }).then(done);
  });

  it("Given a Ballot, When the chairperson gives a person the right to vote, Then verify that user is one of the voters", function(done) {
    var ballot = Ballot.deployed();

    ballot.giveRightToVote(accounts[1], {from: accounts[0]});

    ballot.voters.call(accounts[1]).then(function(voter) {
      assert.equal(voter[0], 1, "Voter has not been given permission to vote.");
    });
    done();
  });

  it("Given a Ballot with a registered voter, When that user votes, Then process vote", function(done) {
    var ballot = Ballot.deployed();

    //verify yes vote
    ballot.giveRightToVote(accounts[1], {from: accounts[0]});
    ballot.vote(true, {from: accounts[1]});

    ballot.yesCount.call().then(function(count) {
      assert.equal(count, 1, "Ballot has an incorrect number of yes votes");
    });

    //verify no vote
    ballot.giveRightToVote(accounts[2], {from: accounts[0]});
    ballot.vote(false, {from: accounts[2]});

    ballot.noCount.call().then(function(count) {
      assert.equal(count, 1, "Ballot has an incorrect number of no votes");
    });

    done();
  });
});
