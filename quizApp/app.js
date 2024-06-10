const prompt = require('prompt-sync')();

let questions = [
    {
        text: "Which of the following colors contain equal amounts of RGB?",
        options: ['White', 'Black', 'Gray', 'All of the above'],
        answer: 'All of the above',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "What color do you get when you mix red and blue?",
        options: ['Purple', 'Green', 'Orange', 'Brown'],
        answer: 'Purple',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "What is the result of adding blue and yellow in the RGB color model?",
        options: ['Green', 'Purple', 'Cyan', 'Magenta'],
        answer: 'Cyan',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "Which of the following is not a primary color in the RGB color model?",
        options: ['Red', 'Green', 'Blue', 'Yellow'],
        answer: 'Yellow',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "In the RGB color model, what does RGB stand for?",
        options: ['Red Green Black', 'Red Gray Blue', 'Red Green Blue', 'Red Gold Black'],
        answer: 'Red Green Blue',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "What is the hexadecimal representation of white color?",
        options: ['#000000', '#FFFFFF', '#FF0000', '#00FF00'],
        answer: '#FFFFFF',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "Which color is created by setting all three RGB components to their maximum values?",
        options: ['Black', 'White', 'Red', 'Blue'],
        answer: 'White',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "What is the hexadecimal representation of black color?",
        options: ['#000000', '#FFFFFF', '#0000FF', '#00FFFF'],
        answer: '#000000',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "What do you get when you mix all the primary colors of light (red, green, blue) in equal amounts?",
        options: ['White', 'Black', 'Gray', 'Brown'],
        answer: 'White',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    },
    {
        text: "In digital color theory, what term describes the range of colors that can be displayed by a device?",
        options: ['Palette', 'Spectrum', 'Gamut', 'Array'],
        answer: 'Gamut',
        correct: () => {
            console.log("Correct Answer");
        },
        wrong: () => {
            console.log("Wrong Answer");
        }
    }
];

let quiz = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].text);
        for (let j = 0; j < questions[i].options.length; j++) {
            console.log(`${j + 1}: ${questions[i].options[j]}`);
        }
        let userAnswerIndex = prompt('Choose the correct answer: ');
        let userAnswer = questions[i].options[userAnswerIndex - 1];
        if (userAnswer === questions[i].answer) {
            questions[i].correct();
            score++;
        } else {
            questions[i].wrong();
        }
    }
    console.log(`Your final score is: ${score}/${questions.length}`);
};

quiz();
