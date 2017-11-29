var inquirer = require("inquirer");
var count = 0;

var cards = [

    {
        front: "Who was the first U.S. president ? ",
        back: "george washington",
        fullText:"George Washington was the first U.S. president"

    },

    {
        front: "Who was the first female to go to space ? ",
        back: "valentina tereshkova",
        fullText:"Valentina Tereshkova was the first female to go to space"

    },

    {
        front: "Who was the U.S. first president to fly on Air Force One ? ",
        back: "dwight eisenhower",
        fullText:" Dwight D. Eisenhower was the first U.S. president to fly on Air Force One"

    },

    {
        front: "Who was the first U.S. president to throw a first pitch on Opening Day ? ",
        back: "william howard taft",
        fullText:"William Howard Taft was the first U.S. president to throw the first pitch on Opening Day"


    },

    {
        front: "Who created the revised / new Pledge of Allegiance ? ",
        back: " francis bellamy",
        fullText:" Francis Bellamy revised the Pledge of Allegiance"


    },

    {
        front: "How Many U.S. Presidents Owned Slaves while in office ? ",
        back: "8",
        fullText:" 8 of our U.S. president owned slaves while in Office"


    },

    {
        front: "Can the president and vice president be from the same state ? ",
        back: "yes",
        fullText:" YES they both can be from the same state"


    },

    {
        front: "Who was the first elected female head of government ?",
        back: "sirimavo bandaranaike",
        fullText:"Sirimavo Bandaranaike was the first elected female head of government"


    },

    {
        front: "Which U.S. vice president wrote a No. 1 pop song ? ",
        back: "charles dawes",
        fullText:"Charles Dawes was the Vice President music maker that wrote the #1 pop song"


    },

    {
        front: "Has anyone earned two Medals of Honor ?",
        back: "yes",
        fullText:"YES but only 19 to date have earned two Medals of Honor since the 1860's"


    }


];

function newFlashCard (front, back) {
    this.front = front;

    this.back = back;

};

function startBasic()    {

    if(count >= cards.length){
        inquirer
            .prompt([
                {
                    name: "guess",
                    message: "That's all the questions, would you like to play a different game ? ",
                    type: "confirm"

                }
            ]) .then(function (hotdog) {
            if(hotdog.guess === true )  {
                startOtherGame();
            } else if (hotdog.guess === false )    {
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
                console.log("                      THANKS FOR PLAYING" );
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");



            }

        })
    }

    if(count < cards.length) {
        var questions = cards[count].front;
        var answer = cards[count].back;
        var flashCard = new newFlashCard(questions, answer);


        inquirer

            .prompt([
                {
                    type: "input",
                    name: "guess",
                    message: String(flashCard.front)

                }

            ])
            .then(function (hotdog) {
                console.log("your answer: " + hotdog.guess);
                if (hotdog.guess.toLocaleLowerCase() === flashCard.back) {
                    console.log(" You Got it Right ");

                } else {
                    console.log(" No That's wrong.. ");
                    console.log(" The Correct answer is: " + flashCard.back);

                }
                count++;
                startBasic();

            });

    }
}
startBasic();

function startOtherGame() {
    count = 0;
    startNewGame();

}

function startNewGame() {
    if(counter < newCards.length) {
        var newQuestions = newCards[counter].front;
        var newAnswer = newCards[counter].back;
        var gameFlashCard = new newGameFlashCard(newQuestions, newAnswer);


        inquirer

            .prompt([
                {
                    type: "input",
                    name: "guess",
                    message: String(gameFlashCard.front)

                }

            ])
            .then(function (hotdog) {
                console.log("your answer: " + hotdog.guess);
                if (hotdog.guess.toLocaleLowerCase() === gameFlashCard.back) {
                    console.log(" You Got it Right ");

                } else {
                    console.log(" No That's wrong.. ");
                    console.log(" The Correct answer is: " + gameFlashCard.back);

                }
                counter++;
                startNewGame();

            });

    }   else {
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        console.log("                      THANKS FOR PLAYING" );
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");


        return;
    }


}
function newGameFlashCard (front, back) {
    this.front = front;

    this.back = back;

};
var counter = 0;
var newCards = [
    {
        front: "What year did the Los Angeles Dodgers first win the world series ?",
        back: "1955"
    },

    {
        front: "How many championships does the Los Angeles Dodgers have ?",
        back: "18"
    },

    {
        front: "What year did the Anaheim Angels first win the world series",
        back: "2002"
    },

    {
        front: "What year did the Anaheim Angels team name change to Los Angeles Angels",
        back: "2005"
    },

    {
        front: "Who was the shortest player ever to play in the NBA ?",
        back: "tyrone bogues"
    },

    {
        front: "How many holes are there in a full round of golf ?",
        back: "18"
    },

    {
        front: "Who is the only athlete ever to play in a Super Bowl and a World Series ?",
        back: "deion sanders"
    },

    {
        front: "What year was the first Super Bowl played ?",
        back: "1967"
    },

    {
        front: "How many soccer players should be on the field at the same time ?",
        back: "22"
    },

    {
        front: "What NFL Quarterback has been in the most Super Bowls ?",
        back: "tom brady"
    }


];

