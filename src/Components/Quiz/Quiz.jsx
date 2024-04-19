import React, { useState, useEffect } from "react";
import ScorePage from "../Scorepage/ScorePage";
import "./Quiz.css";
import questions from "./Questions.json";

const Quiz = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(5).fill(null)); // Initialize for 5 questions
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // State for correct answers count

  const selectRandomQuestions = () => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    const selected = shuffledQuestions.slice(0, 5); // Select first 5 questions
    setSelectedQuestions(selected);
    setAnswers(new Array(5).fill(null)); // Reset answers for 5 questions
  };

  // Load random questions on component mount
  useEffect(() => {
    selectRandomQuestions();
  }, []);

  const handleAnswerButtonClick = (isCorrect, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePreviousButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const handleSubmitButtonClick = () => {
    let correctCount = 0;

    selectedQuestions.forEach((question, index) => {
      const selectedAnswerIndex = answers[index];
      if (
        selectedAnswerIndex !== null &&
        question.answerOptions[selectedAnswerIndex].isCorrect
      ) {
        correctCount++;
      }
    });

    setCorrectCount(correctCount); // Update correctCount state
    setQuizSubmitted(true);
  };

  if (selectedQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  if (quizSubmitted) {
    return <ScorePage score={correctCount} />;
  }

  return (
    <div className="Quiz">
      <div className="quiz-container">
        {/* Display current question */}
        <div className="question-text">
          {selectedQuestions[currentQuestion].questionText}
        </div>

        {/* Display answer options */}
        <div className="answer-options">
          {selectedQuestions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerButtonClick(answerOption.isCorrect, index)
                }
                className={`answer-button ${
                  answers[currentQuestion] === index ? "selected" : ""
                }`}
              >
                {answerOption.answerText}
              </button>
            )
          )}
        </div>

        {/* Navigation buttons */}
        <div className="navigation-buttons">
          <button
            onClick={handlePreviousButtonClick}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {currentQuestion < 4 && (
            <button
              onClick={handleNextButtonClick}
              disabled={answers[currentQuestion] === null}
            >
              Next
            </button>
          )}
          {currentQuestion === 4 && (
            <button
              onClick={handleSubmitButtonClick}
              disabled={answers.some((answer) => answer === null)}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
