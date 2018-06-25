// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter16.md#interactive-quiz

// List of questions (statement + answer)
const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];

const showQuestionTasks = () => {
    const content = document.getElementById(`content`);
    let number = 1;

    questions.map(question => {
        const questionNumber = document.createElement(`b`);
        const questionText = document.createElement(`p`);
        const showAnswerButton = document.createElement(`button`);
        const answer = document.createElement(`p`);

        answer.innerText = question.answer;

        questionNumber.style.fontStyle = `normal`;
        questionNumber.innerText = `Question ${number}: `;

        questionText.style.fontStyle = `italic`;
        questionText.innerText = question.statement;
        questionText.insertAdjacentElement(`afterbegin`, questionNumber);

        showAnswerButton.innerText = `Show answer`;
        showAnswerButton.id = `answer_${number}`;
        showAnswerButton.addEventListener(`click`, () => {
            content.replaceChild(answer, showAnswerButton);
        });

        content.appendChild(questionText);
        content.appendChild(showAnswerButton);

        number++;
    });
};

showQuestionTasks();
