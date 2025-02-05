







// Variables to hold the quiz state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Array to store user ans

// List of questions and their options
const questions = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "A. Hyper type Multi Language",
            "B. Hyper text Multiple Language",
            "C. Hyper text Markup Language",
            "D. Hyper text Multi Language"
        ],
        correctAnswer: 2
    },



    {
        question: "2. Which tag is used to define an HTML document?",
        options: [
            "A. <html>",
            "B. <body>",
            "C. <head>",
            "D. <header>"
        ],
        correctAnswer: 0
    },


    {
        question: "3. Who is making the Web standards?",
        options: [
            "A. Microsoft",
            "B. Google",
            "C. The World Wide Web Consortium",
            "D. Mozilla"
        ],
        correctAnswer: 2
    },

    {
        question: "4. Choose the correct HTML element to define important text",
        options: [
            "A. <b>",
            "B. <i>",
            "C. <strong>",
            "D. <important>"
        ],
        correctAnswer: 2
    },


    {
        question: "5. Choose the correct HTML element for the largest heading:",
        options: [
            "A. <heading>",
            "B. <h1>",
            "C. <h6>",
            "D. <head>"
        ],
        correctAnswer: 1
    },


    {
        question: "6. What is the correct HTML for creating a hyperlink?",
        options: [
            "A. <a name='http://www.w3schools.com'>W3Schools.com</a>",
            "B. <a url='http://www.w3schools.com'>W3Schools.com</a>",
            "C. <a href='http://www.w3schools.com'>W3Schools</a>",
            "D. <a>http://www.w3schools.com</a>"
        ],
        correctAnswer: 2
    },


    {
        question: "7. Which character is used to indicate an end tag?",
        options: [
            "A. < ",
            "B. *",
            "C. ^",
            "D. /"
        ],
        correctAnswer: 3
    },


    {
        question: "8. Which of these elements are all <table> elements?",
        options: [
            "A. <table><tr><td>",
            "B. <table><tr><tt>",
            "C. <table><head><tfoot>",
            "D. <thead><body><tr>"
        ],
        correctAnswer: 0
    },

    {
        question: "9. How can you make a numbered list?",
        options: [
            "A. <ul> ",
            "B. <list>",
            "C. <dl>",
            "D. <ol>"
        ],
        correctAnswer: 3
    },

    {
        question: "10. What is the correct HTML for making a checkbox?",
        options: [
            "A. <input type='check'>",
            "B. <input type='checkbox'>",
            "C. <check>",
            "D. <checkbox>"
        ],
        correctAnswer: 1
    },




    // .11...................................................................................................................................



    {
        question: "11. What is the correct HTML for making a text input field?",
        options: [
            "A. <textfield>",
            "B. <input type='textfiel'>",
            "C. <textinput type='text'>",
            "D. <input type='text'>"
        ],
        correctAnswer: 3
    },


    {
        question: "12. What is the correct HTML for inserting an image?",
        options: [
            "A. <img src='image.gif' alt='MyImage'>",
            "B. <img href='image.gif' alt='MyImage'>",
            "C. <image src='image.gif' alt='MyImage'>",
            "D. <img alt='MyImage'>image.gif</img>"
        ],
        correctAnswer: 0
    },


    {
        question: "13. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
            "A. longdesc",
            "B. title",
            "C. alt",
            "D. src"
        ],
        correctAnswer: 2
    },


    {
        question: "14. Which HTML element is used to specify a footer for a document or section?",
        options: [
            "A. <footer>",
            "B. <bottom>",
            "C. <section>",
            "D. <foot>"
        ],
        correctAnswer: 0
    },


    {
        question: "15. What is the correct HTML element for playing video files?",
        options: [
            "A. <movie>",
            "B. <media>",
            "C. <video>",
            "D. <iframe>"
        ],
        correctAnswer: 2
    },

    {
        question: "16. What is the correct HTML for creating a hyperlink?",
        options: [
            "A. <a href='http://www.w3schools.com'>W3Schools</a>",
            "B. <a url='http://www.w3schools.com'>W3Schools.com</a>",
            "C. <a name='http://www.w3schools.com'>W3Schools.com</a>",
            "D. <a>http://www.w3schools.com</a>"
        ],
        correctAnswer: 0
    },


    {
        question: "17. The HTML <canvas> element is used to:",
        options: [
            "A. manipulate data in MySQL  ",
            "B. create draggable elements",
            "C. display database records",
            "D. draw graphics"
        ],
        correctAnswer: 3
    },


    {
        question: "18. In HTML, which attribute is used to specify that an input field must be filled out?",
        options: [
            "A. validate",
            "B. placeholder",
            "C. required",
            "D. formvalidate"
        ],
        correctAnswer: 1
    },


    {
        question: "19. Which input type defines a slider control?",
        options: [
            "A. slider",
            "B. controls",
            "C. search",
            "D. range"
        ],
        correctAnswer: 3
    },


    {
        question: "20. Which HTML element is used to display a scalar measurement within a range?",
        options: [

            "A. <measure>",
            "B. <range>",
            "C. <gauge>",
            "D. <meter>"
        ],
        correctAnswer: 1
    },


    // ..21.................................................................................... 
    {
        question: "21. Which HTML element defines navigation links?",
        options: [
            "A. <nav>",
            "B. <navigation>",
            "C. <navigate>",
            "D. <menu>"
        ],
        correctAnswer: 0
    },

    {
        question: "22. What is the correct HTML for inserting an image?",
        options: [
            "A. <image src='image.gif' alt='MyImage'>",
            "B. <img href='image.gif' alt='MyImage'>",
            "C. <img src='image.gif' alt='MyImage'>",
            "D. <img alt='MyImage'>image.gif</img>"
        ],
        correctAnswer: 2
    },


    {
        question: "23. What is the correct HTML element for playing video files?",
        options: [
            "A. <video>",
            "B. <media>",
            "C. <movie>",
            "D. <iframe>"
        ],
        correctAnswer: 0
    },


    {
        question: "24. Which HTML element defines navigation links?",
        options: [
            "A. <navigate>",
            "B. <navigation>",
            "C. <nav>",
            "D. <menu>"
        ],
        correctAnswer: 2
    },

    {
        question: "25. What is the correct HTML for making a checkbox?",
        options: [
            "A. <input type='check'>",
            "B. <checkbox>",
            "C. <check>",
            "D. <input type='checkbox'>"
        ],
        correctAnswer: 3
    },




];




function handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

// Function to handle navigation to the previous question
function handlePrevious() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
}




// Function to update the question and options on the page
function updateQuestion() {
    const questionText = document.querySelector('.question-text');
    const options = document.querySelectorAll('.option');
    const nextButton = document.querySelector('.next-btn'); // "Next" button
    const submitButton = document.querySelector('.submit-btn'); // "Submit" button
    const previousButton = document.querySelector('.previous-btn'); // "Previous" button
    const currentQuestion = questions[currentQuestionIndex];

    // Update question text
    questionText.textContent = currentQuestion.question;

    // Update options
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.style.backgroundColor = ''; // Reset background color
        option.classList.remove('correct', 'incorrect'); // Remove any previous color classes
        option.style.pointerEvents = ''; // Re-enable pointer events for options

        // If the user has already attempted this question
        if (userAnswers[currentQuestionIndex] !== undefined) {
            const userAnswer = userAnswers[currentQuestionIndex];

            // If the user selected this option, color it based on correctness
            if (userAnswer.index === index) {
                option.style.backgroundColor = userAnswer.correct ? 'rgba(151, 231, 105, 0.84)' : 'rgba(247, 60, 54, 0.81)'; // User's selection
            }

            // Highlight the correct answer in green
            if (index === currentQuestion.correctAnswer) {
                option.style.backgroundColor = 'rgba(151, 231, 105, 0.84)'; // Correct answer is always green
            }

            // If the user selected the wrong answer, highlight it in red
            if (index !== currentQuestion.correctAnswer && userAnswer.index === index) {
                option.style.backgroundColor = 'rgba(247, 60, 54, 0.81)'; // Incorrect selection
            }

            // Disable all options after an answer is selected
            option.style.pointerEvents = 'none'; // Disable further selection
        }
    });

    // If the current question is the last one, change "Next" to "Submit"
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none'; // Hide the next button
        submitButton.style.display = 'inline-block'; // Show the submit button
    } else {
        nextButton.style.display = 'inline-block'; // Show next button
        submitButton.style.display = 'none'; // Hide submit button
    }



    // If the current question is the first one, hide the "Previous" button
    if (currentQuestionIndex === 0) {
        previousButton.style.display = 'none'; // Hide the previous button on the first question
    } else {
        previousButton.style.display = 'inline-block'; // Show the previous button if not on the first question
    }



    // Update score display
    const scoreDisplay = document.querySelector('.header-score');
    scoreDisplay.textContent = `score: ${score} / ${questions.length}`;

    // Update the question navigation display
    const questionNav = document.querySelector('.question-total');
    questionNav.textContent = `${currentQuestionIndex + 1} of ${questions.length} Question.`;

    // Update index links background color
    updateIndexQuestionLinks();
}

// Function to update the background color of the index question links
function updateIndexQuestionLinks() {
    const questionLinks = document.querySelectorAll('.question-link');

    // Loop through each link and check the user's answer for that question
    questionLinks.forEach((link, index) => {
        const userAnswer = userAnswers[index];

        // If the user has answered this question
        if (userAnswer !== undefined) {
            // If the answer is correct, change the background to green
            if (userAnswer.correct) {
                link.style.backgroundColor = 'rgba(151, 231, 105, 0.84)'; // Correct answer - Green
            }
            // If the answer is incorrect, change the background to red
            else {
                link.style.backgroundColor = 'rgba(247, 60, 54, 0.81)'; // Incorrect answer - Red
            }
        }
        // If the question has not been answered, reset the background
        else {
            link.style.backgroundColor = ''; // Reset background
        }
    });
}

// Handle option selection and update the question index links
function handleOptionClick(event) {
    const selectedOption = event.target;
    const currentQuestion = questions[currentQuestionIndex];

    const selectedOptionIndex = parseInt(selectedOption.getAttribute('data-option'));

    // Track the user's answer
    userAnswers[currentQuestionIndex] = {
        index: selectedOptionIndex,
        correct: selectedOptionIndex === currentQuestion.correctAnswer
    };

    // Update the score if the answer is correct
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
        score++; // Increment score for correct answer
    }

    // Update the index question links' colors
    updateIndexQuestionLinks();

    // Disable further options after selection
    document.querySelectorAll('.option').forEach(option => option.style.pointerEvents = 'none');

    // Update the option's background based on correctness
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
        selectedOption.style.backgroundColor = 'rgba(151, 231, 105, 0.84)'; // Correct answer
    } else {
        selectedOption.style.backgroundColor = 'rgba(247, 60, 54, 0.81)'; // Incorrect answer
    }

    // Highlight the correct answer in green
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === currentQuestion.correctAnswer) {
            option.style.backgroundColor = 'rgba(151, 231, 105, 0.84)'; // Correct answer in green
        }
    });
}

// Handle navigation through questions
function handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

// Handle submitting the quiz and showing the score popup
function handleSubmit() {
    // Show the result as a popup
    const resultPopup = document.querySelector('.result-popup');
    const resultScore = document.querySelector('.result-score');
    resultScore.textContent = `Your Score: ${score} / ${questions.length}`;
    resultPopup.style.display = 'block'; // Show the result popup
}

// Handle closing the result popup
function handleClose() {
    const resultPopup = document.querySelector('.result-popup');
    resultPopup.style.display = 'none'; // Hide the result popup
}

// Event listener for the "Close" button in the result popup
document.querySelector('.close-btn').addEventListener('click', handleClose);



// Handle accessing questions by index
function handleIndexClick(event) {
    const questionIndex = parseInt(event.target.getAttribute('data-question'));
    currentQuestionIndex = questionIndex;
    updateQuestion();
}

// Event listeners for options and buttons
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', handleOptionClick);
});

document.querySelector('.next-btn').addEventListener('click', handleNext);
document.querySelector('.previous-btn').addEventListener('click', handlePrevious); // Previous button event
document.querySelector('.submit-btn').addEventListener('click', handleSubmit); // Submit button event

// Event listener for index links
document.querySelectorAll('.question-link').forEach(link => {
    link.addEventListener('click', handleIndexClick);
});

// Initialize the quiz
updateQuestion();