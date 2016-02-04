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
  Ballot.abi = [{ "constant": true, "inputs": [], "name": "chairperson", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bill", "outputs": [{ "name": "number", "type": "uint256" }, { "name": "congress", "type": "uint256" }, { "name": "billType", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getCongress", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "voter", "type": "address" }], "name": "giveRightToVote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "voters", "outputs": [{ "name": "weight", "type": "uint256" }, { "name": "voted", "type": "bool" }, { "name": "delegatedTo", "type": "address" }, { "name": "vote", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getBillType", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getBillNumber", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "number", "type": "uint256" }, { "name": "congress", "type": "uint256" }, { "name": "billType", "type": "bytes32" }], "type": "constructor" }];
  Ballot.binary = "60606040526040516060806101d883395060c06040525160805160a05160029290925560035560045560008054600160a060020a0319163317815561018f90819061004990396000f3606060405236156100615760e060020a60003504632e4176cf8114610063578063371e677a146100755780636a96b9a5146100855780639e7b8d611461008f578063a3ec138d146100d9578063b9db43e314610128578063c20ceca014610133575b005b61013e600054600160a060020a031681565b6101486002546004546003549083565b61013e6003545b90565b61006160043560005433600160a060020a0390811691161415806100cf5750600160a060020a0381166000908152600160208190526040909120015460ff165b1561016f5761018c565b6101596004356001602081905260009182526040909120805491015460ff80821691600160a060020a036101008204169175010000000000000000000000000000000000000000009091041684565b61013e60045461008c565b61013e60025461008c565b6060908152602090f35b606092835260809190915260a05280f35b6060938452608092835260a09190915260c05290f35b600160a060020a0381166000908152600160208190526040909120555b5056";

  if ("0x26add239150be62fac0e8b9a6c550f97434e13b1" != "") {
    Ballot.address = "0x26add239150be62fac0e8b9a6c550f97434e13b1";

    // Backward compatibility; Deprecated.
    Ballot.deployed_address = "0x26add239150be62fac0e8b9a6c550f97434e13b1";
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