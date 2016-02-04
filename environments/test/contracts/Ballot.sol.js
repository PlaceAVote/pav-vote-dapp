"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Ballot = (function (_Pudding) {
    _inherits(Ballot, _Pudding);

    function Ballot() {
      _classCallCheck(this, Ballot);

      _get(Object.getPrototypeOf(Ballot.prototype), "constructor", this).apply(this, arguments);
    }

    return Ballot;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Ballot.abi = [{ "constant": true, "inputs": [], "name": "chairperson", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bill", "outputs": [{ "name": "number", "type": "uint256" }, { "name": "congress", "type": "uint256" }, { "name": "billType", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "yesCount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getCongress", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "voter", "type": "address" }], "name": "giveRightToVote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "noCount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "voters", "outputs": [{ "name": "weight", "type": "uint256" }, { "name": "voted", "type": "bool" }, { "name": "delegatedTo", "type": "address" }, { "name": "vote", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getBillType", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getBillNumber", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "number", "type": "uint256" }, { "name": "congress", "type": "uint256" }, { "name": "billType", "type": "bytes32" }], "type": "constructor" }];
  Ballot.binary = "606060405260405160608061029b83395060c06040525160805160a05160029290925560035560045560008054600160a060020a0319163317815561025290819061004990396000f3606060405236156100825760e060020a60003504632e4176cf8114610084578063371e677a146100965780634b9f5c98146100a65780635c8d9541146100d85780636a96b9a5146100e15780639e7b8d61146100eb578063a2fcbad714610135578063a3ec138d1461013e578063b9db43e31461017b578063c20ceca014610186575b005b610191600054600160a060020a031681565b61019b6002546004546003549083565b61008260043533600160a060020a031660009081526001602081905260409091209081015460ff16156101df57610002565b61019160055481565b6101916003545b90565b61008260043560005433600160a060020a03908116911614158061012b5750600160a060020a0381166000908152600160208190526040909120015460ff165b156101c257610002565b61019160065481565b6101ac6004356001602081905260009182526040909120805491015460ff80821691600160a060020a036101008204169160a860020a9091041684565b6101916004546100e8565b6101916002546100e8565b6060908152602090f35b606092835260809190915260a05280f35b6060938452608092835260a09190915260c05290f35b600160a060020a0316600090815260016020819052604090912055565b6001818101805460ff191690911775ff000000000000000000000000000000000000000000191660a860020a84021790558115610234578060000160005054600560008282825054019250508190555061024e565b806000016000505460066000828282505401925050819055505b505056";

  if ("0x66aa54458e71d1da90430575bfcc5b4f53912beb" != "") {
    Ballot.address = "0x66aa54458e71d1da90430575bfcc5b4f53912beb";

    // Backward compatibility; Deprecated.
    Ballot.deployed_address = "0x66aa54458e71d1da90430575bfcc5b4f53912beb";
  }

  Ballot.generated_with = "1.0.3";
  Ballot.contract_name = "Ballot";

  return Ballot;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Ballot = factory;
}