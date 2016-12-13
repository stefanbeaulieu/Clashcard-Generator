// 'use strict';

var inquirer = require("inquirer");
var Basic = require("./basicflashcard");

var questions = [];

var questionPrompts = [{
    name: "question",
    message: "What is your question?"
}, {
    name: "answer",
    message: "What is the answer?"
}];

var handleError = function(err) {
    console.log(err);
};

var handleQuestionResponse = function (answers) {
        var newQuestion = new Basic( this.question, this.answer );
        newQuestion.printInfo();
        questions.push(newQuestion);
};

var promptForQuestion = function() {
    inquirer.prompt(questionPrompts)
    .then(handleQuestionResponse, handleError);
    // .then(handleAnotherResponse, handleError);
};

promptForQuestion();
