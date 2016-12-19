'use strict';

/***********************
 * NPM PACKAGES
 **********************/
var inquirer = require('inquirer');
var fs = require('fs');
var Basic = require("./basicflashcard");
var Cloze = require('./clozeflashcard')



/***********************
 * App Variables in use
 **********************/
var p1 = process.argv[2];
var questions = [];
var clozeQuestions = [];



/***********************
 * Beginning of App
 **********************/
if (p1 === undefined) {
    /*******************
     * When p1 is undefined and user inputs no process move user into error prompt for proper input
     ********************/

    console.log('Please input command either "Basic" or "Cloze" to select the type of flash card you would like to save.');

} else if (p1.toLowerCase() === "basic") {
    /*******************
     * When p1 is "basic" move user into prompts to save basic Flash Cards
     ********************/

    // testing that basic if statement has been entered by user
    console.log('You chose to make a Basic flashcard!');

    // Creating user prompts to creat flash cards
    var questionPrompts = [{
        type: "input",
        name: "question",
        message: "What is the front of the card?"
    }, {
        type: "input",
        name: "answer",
        message: "What is the back of the card?"
    }];

    // handle the first repsonse input from the user
    var handleQuestionResponse = function(answers) {
        var newQuestion = new Basic(answers.question, answers.answer);
        newQuestion.printInfo();
        questions.push(newQuestion);
        fs.appendFile('basicflashcard.txt', "\nFront of Card: " + answers.question + " Back of Card: " + answers.answer);

        // Checks to see if user wanted to input more than one flash card at a time
        return inquirer.prompt([{
            name: "another",
            message: "add another?",
            type: "confirm",
            default: true
        }]);
    };

    // handler for multiple repsonses from user
    var handleAnotherResponse = function(cont) {
        if (cont.another) {
            promptForQuestion();
        } else {
            console.log("Number of Flashcards added to database: " + questions.length + ".");
        }
    };

    // error checker and response given
    var handleError = function(err) {
        console.log("There has been an error.");
    };

    // compiles all user input
    var promptForQuestion = function() {
        inquirer.prompt(questionPrompts)
            .then(handleQuestionResponse, handleError)
            .then(handleAnotherResponse, handleError);
    };

    promptForQuestion();

} else if (p1.toLowerCase() === "cloze") {
    /*******************
     * When p1 is "cloze" move user into prompts to save Cloze Flash Cards
     ********************/

    // testing that cloze if statement has been entered by user
    console.log('You chose to make a Cloze flashcard!');

    // Creating user prompts to creat flash cards
    var clozeQuestionPrompts = [{
        type: "input",
        name: "cloze",
        message: "What would you like hidden (Cloze)?"
    }, {
        type: "input",
        name: "phrase",
        message: "What is the text of the card to finish the question?"
    }];

    // handle the first repsonse input from the user
    var handleClozeResponse = function(clozeAnswers) {
        var newClozeQuestion = new Cloze(clozeAnswers.cloze, clozeAnswers.phrase);
        newClozeQuestion.printClozeInfo();
        clozeQuestions.push(newClozeQuestion);
        fs.appendFile('clozeflashcard.txt', "\nCloze Text: " + clozeAnswers.cloze + "Text: " + clozeAnswers.phrase);

        // Checks to see if user wanted to input more than one flash card at a time
        return inquirer.prompt([{
            name: "anotherCloze",
            message: "Add another Cloze Card?",
            type: "confirm",
            default: true
        }]);
    };

    // handler for multiple repsonses from user
    var handleAnotherClozeResponse = function(cont2) {
        if (cont2.anotherCloze) {
            promptForClozeQuestion();
        } else {
            console.log("Number of Flashcards added to database: " + questions.length + ".");
        }
    };

    // error checker and response given
    var handleClozeError = function() {
        console.log("There has been an error.");
    };

    // compiles all user input
    var promptForClozeQuestion = function() {
        inquirer.prompt(clozeQuestionPrompts)
            .then(handleClozeResponse, handleClozeError)
            .then(handleAnotherClozeResponse, handleClozeError);
    };

    promptForClozeQuestion();

} else {
    console.log('Please input command either "Basic" or "Cloze" to select the type of flash card you would like to save.');
}