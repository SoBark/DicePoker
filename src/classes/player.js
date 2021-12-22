const Dice = require("./dice");

const Player = function (playerName, socket, debug) {
  this.username = playerName;
  this.dices = [];
  this.socket = socket;
  this.currentCard = null;
  this.money = 100;
  this.buyIns = 0;
  this.status = '';
  this.blindValue = '';
  this.dealer = false;
  this.allIn = false;
  this.goAgainStatus = false;
  this.debug = debug || false;

  this.addDice = (dice) => {
    this.dices.push(dice);
  };

  this.log = () => {
    if (this.debug) {
      console.log(...arguments);
    }
  };

  this.setStatus = (data) => (this.status = data);
  this.setBlind = (data) => (this.blindValue = data);
  this.setDices = (number) => { for(let i = 0; i < number; i++) ( this.dices[i] = (new Dice(1)) ) };
  this.throwDice = (index) => ( this.dices[index] = new Dice (Math.floor(Math.random() * 6 + 1)) );
  this.throwDices = (number) => { for(let i = 0; i < number; i++) {this.dices[i] = new Dice(Math.floor(Math.random() * 6 + 1))} }; 
  this.setDealer = (data) => (this.dealer = data);
  this.getUsername = () => {
    return this.username;
  };
  this.getBuyIns = () => {
    return this.buyIns;
  };
  this.getMoney = () => {
    return this.money;
  };
  this.getStatus = () => {
    return this.status;
  };
  this.getBlind = () => {
    return this.blindValue;
  };
  this.getDealer = () => {
   return this.dealer;
  };

  this.emit = (eventName, payload) => {
    this.socket.emit(eventName, payload);
  };
};

module.exports = Player;
