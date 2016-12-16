'use strict';

var inquirer = require('inquirer');
var fs = require('fs');
var Basic = require("./basicflashcard");
var Cloze = require('clozeflashcard')

var questions = [];

var questionPrompts = [{
    name: "question",
    message: "What is your question?"
}, {
    name: "answer",
    message: "What is the answer?"
}];

var handleQuestionResponse = function(answers) {
    var newQuestion = new Basic(this.question, this.answer);
    newQuestion.printInfo();
    questions.push(newQuestion);
    return inquirer.prompt([{
        name: "another",
        message: "add another?",
        type: "confirm",
        default: true
    }]);
};

var handleAnotherResponse = function(cont) {
    if (cont.another) {
        promptForProgrammer();
    } else {
        console.log("Added " + programmers.length);
    }
};

var promptForQuestion = function() {
    inquirer.prompt(questionPrompts)
        .then(handleQuestionResponse, handleError)
        .then(handleAnotherResponse, handleError);
};

var handleError = function(err) {
    console.log(err);
};

promptForQuestion();