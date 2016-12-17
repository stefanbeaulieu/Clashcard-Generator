// Constructor used for creating new Basic Flash card

var fs = require('fs');

function Basic(question, answer) {
    this.question = question;
    this.answer = answer;
}

Basic.prototype.printInfo = function() {
    console.log("Question: " + this.question + "\nAnswer: " + this.answer + "\nThis card has been added to the database!");
    // fs.appendFile('basicflashcard.txt', "\nQuestion: " + this.question + " Answer: " + this.answer);
};

module.exports = Basic;