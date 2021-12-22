const Dice = function (value) {
  this.value = value;


  const constructor = (function () {})(this);

  this.compare = (dice) => {
    if (this.value < dice.getValue()) return -1;
    if (this.value == dice.getValue()) return 0;
    return 1;
  };

  this.isGreater = (dice) => {
    return this.value > dice.getValue() ? true : false;
  };

  this.getValue = () => { 
    return this.value;
  };

  this.print = () => console.log(this.getValue());
};

module.exports = Dice;
