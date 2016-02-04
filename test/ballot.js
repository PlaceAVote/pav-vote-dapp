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
        ballot.getBillType.call().then(function(type) {
          //assert.equal(type, web3.toHex(billType), "Bill Types do not match");
        });
    }).then(done);
  });

  it("Given a bill, When chairperson gives a person rights to vote, Then verify user is one of the voters", function(done) {
    var ballot = Ballot.deployed();

    ballot.giveRightToVote(accounts[1], {from: accounts[0]});

    ballot.voters.call(accounts[1]).then(function(voter) {
      assert.isNotNull(voter, accounts[1], "Voter has not been given permission to vote.");
    });
    done();
  });
});
