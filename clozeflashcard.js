// Constructor used to create Cloze Flashcard
function Cloze(cloze, text) {
    this.cloze = cloze;
    this.text = text;
}

Cloze.prototype.printInfo = function() {
    console.log("Cloze: " + this.cloze + "\ntext: " + this.text + "\nThis card has been added to the database!");
    // fs.appendFile('clozeflashcard.txt', "\ncloze: " + this.cloze + " text: " + this.text);
};

module.exports = Cloze;