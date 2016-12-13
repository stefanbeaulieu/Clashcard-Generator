// Constructor used for creating new Basic Flash card
function Basic (question, answer) {
    this.question = question;
    this.answer = answer;
}

Basic.prototype.printInfo = function () {
    console.log("Question: " + this.question + "\nAnswer: " + this.answer);
};

module.exports = Basic;
