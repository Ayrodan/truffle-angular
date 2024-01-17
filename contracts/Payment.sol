pragma solidity ^0.5.16;

contract Payment {
  address sendingFrom;
  address payable sendingTo;

  constructor() public {
    sendingFrom = msg.sender;
  }

  event InfoOfSending(address payable _sendingTo, address _sendingFrom, uint amount);

  function sending( address payable _sendingTo ) public payable returns (bool){
      sendingTo = _sendingTo;

      sendingTo.transfer(msg.value);

      emit InfoOfSending(sendingTo, sendingFrom, msg.value);

      return true;
  }

  function getBalanceOfCurrentAccount() public payable returns (uint) {
    return sendingFrom.balance;
  }

}
