# Clashcard-Generator

Create a flashcard app.

### Task List

- [ ] User must create API that allows users to create two types of flashcards
- Basic Flash Cards
    - front ("Who was the first president of the United States?")
    - back ("George Washington").
- Cloze-Deleted Flash Cards
    - present partial text ("... was the first president of the United States.")
    - the full text when the user requests it ("George Washington was the first president of the United States.")
- [ ] Determine efficient way to store close deleted cards.



### Pseudocode

    1. user create BasicFlashcard constructor
        1. accepts if front (question) / back (answer) arguments
    2. create ClozeFlashcard constructor
        1. accepts if partial text("... text here") / cloze ("full on text here") arguments

#### Instructions

Create a new GitHub repository, named Clashcard-Generator or something similar. Clone this to your local drive.

Create a BasicFlashcard constructor. It should accept front and back arguments.

Create a ClozeFlashard constructor. It should accept text and cloze arguments.

ClozeFlashcard should have a method that returns only the cloze-deleted portion of the text.

You are free to experiment with the other details of your implementation, but you must store at least one property, and equip cloze-deleted flashcards with at least one additional method.

Your application should provide a way for users to save any flashcards they might create to a text file.

What data should you save?

Where might it make sense to add a method for saving flashcards?
