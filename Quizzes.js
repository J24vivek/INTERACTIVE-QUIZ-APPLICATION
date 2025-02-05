const htmlStart = document.querySelector('.html-start');
const htmlPopupInfo = document.querySelector('.html-popup-info');
const exitBtn = document.querySelector('.exit-btn');
const secQuizzes = document.querySelector('.secQuizzes');
const startBtn = document.querySelector('.start-btn');
const quizSection = document.querySelector('.quiz-section');
const queQuiz = document.querySelector('.que-quiz');


htmlStart.onclick = () => {
    htmlPopupInfo.classList.add('active');
    secQuizzes.classList.add('active');
}

exitBtn.onclick = () => {
    htmlPopupInfo.classList.remove('active');
    secQuizzes.classList.remove('active');
}

startBtn.onclick = () => {
    quizSection.classList.add('active');
    htmlPopupInfo.classList.remove('active');
    secQuizzes.classList.remove('active');
    queQuiz.classList.add('active');

 
}