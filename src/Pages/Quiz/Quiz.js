import React from "react";
import { useState } from "react";
import questions from "../../Data/Questions";
import "./Quiz.css";

const Quiz = ({ name, score, setScore }) => {
  const [disable, setDisable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCheck = () => {
    for(let i = 1; i <= questions.length; i++) {
       let questionName = document.getElementsByName(i);
  
        for(var j = 0; j < questionName.length; j++) {
            
            let radiosValue = questionName[j];

            if(radiosValue.checked && radiosValue.value === "1") {
                setScore(score+=1);
                radiosValue.nextSibling.style.color = "green";
            } else if (radiosValue.checked && radiosValue.value === "0") {
                radiosValue.nextSibling.style.color = "red";
            } else {
                radiosValue.nextSibling.style.color = "";
            }
        }
    }
    setDisable(true);
  };

  console.log(score);
  let currentQuestion = 1;

  return (
    <form className="quiz" onSubmit={handleSubmit}>
      <div className="quizInformation">
        <span>Student: {name}</span>
        <span>Score : {score}</span>
      </div>

      {questions.map((question) => (
        <div className="singleQuestion" key={currentQuestion++}>
          <div className="questionText">{question.questionText}</div>
          <div className="options">
            <input
              type="radio"
              id="a"
              name={currentQuestion}
              value={question.options[0][1]}
            />
            <label>{question.options[0][0]}</label>
            <br />

            <input
              type="radio"
              id="b"
              name={currentQuestion}
              value={question.options[1][1]}
            />
            <label>{question.options[1][0]}</label>
            <br />

            <input
              type="radio"
              id="c"
              name={currentQuestion}
              value={question.options[2][1]}
            />
            <label>{question.options[2][0]}</label>
            <br />

            <input
              type="radio"
              id="d"
              name={currentQuestion}
              value={question.options[3][1]}
            />
            <label>{question.options[3][0]}</label>
            <br />
          </div>
        </div>
      ))}
      <div className="submitArea">
        <button
          className="submitButton"
          type="submit"
          disabled={disable}
          onClick={() => handleCheck()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Quiz;
