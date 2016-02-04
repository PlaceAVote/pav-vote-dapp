contract Ballot {

  //This represents a single voter
  struct Voter {
   uint weight; //weight is accumulated delegation
   bool voted; //if true they have already voted
   address delegatedTo; //voter you have delegated your vote to
   bool vote; //there vote
  }

  //This represents a bill, e.g. hr542
  struct Bill {
    uint number; //bill number e.g. 542
    uint congress; //Current congress e.g. 114
    bytes32 billType; //Bill type e.g. hr
  }

  //Creator of ballot
  address public chairperson;

  // stores a `Voter` struct for each possible address.
  mapping(address => Voter) public voters;

  // stores a `Bill` struct for associated Bill
  Bill public bill;

  //store current vote count;
  uint public yesCount;
  uint public noCount;

  function Ballot(uint number, uint congress, bytes32 billType) {
    bill.number = number;
    bill.congress = congress;
    bill.billType = billType;
    chairperson = msg.sender;
  }

  function giveRightToVote(address voter){
      if (msg.sender != chairperson || voters[voter].voted) return;
      voters[voter].weight = 1;
  }

  function vote(bool vote) {
    Voter sender = voters[msg.sender];
    if(sender.voted) return;
    sender.voted = true;
    sender.vote = vote;
    if(vote) {
      yesCount += sender.weight;
    } else {
      noCount += sender.weight;
    }
  }

  function getBillNumber() returns (uint) {
    return bill.number;
  }

  function getCongress() returns (uint) {
    return bill.congress;
  }

  function getBillType() returns (bytes32) {
    return bill.billType;
  }
}
