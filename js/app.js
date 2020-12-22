const container = document.querySelector('.quizContainer')
const question = document.querySelector('.question');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const nextButton = document.querySelector('.next-btn');
const result = document.querySelector('.result');

let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

const loadQuestion = questionIndex => {
    let q = questions[questionIndex];

    question.textContent = `${questionIndex + 1}. ${q.word}`;

    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

const nextQuestion = () => {
    const selectedOption = document.querySelector('input[type=radio]:checked');

    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }

    const answer = selectedOption.value;

    if (questions[currentQuestion].answer === answer) {
        score += 10;
    }
    
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if (currentQuestion === totalQuestions) {
        // show score result
        container.style.display = 'none';
        result.classList.remove('d-none');

        // animate score result
        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}`;
            if (output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 25); // 25 milliseconds interval

        return;
    }

    loadQuestion(currentQuestion);
};

loadQuestion(currentQuestion);
