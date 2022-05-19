import React from "react";
import { useState } from "react";
import questions from "../../Data/Questions";
import "./Quiz.css";

const questionPortion = questions.sort(() => Math.random() - 0.5).slice(0, 25);

const Quiz = ({ name, score, setScore }) => {
  const [disable, setDisable] = useState(false);
  const [pass, setPass] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCheck = (event) => {
    event.preventDefault();

    for (let i = 1; i <= questionPortion.length; i++) {
      let questionName = document.getElementsByName(i);

      for (var j = 0; j < questionName.length; j++) {
        let radiosValue = questionName[j];

        if (radiosValue.checked && radiosValue.value === "1") {
          setScore((score += 1));
          radiosValue.nextSibling.style.color = "green";
          radiosValue.nextSibling.style.fontWeight = "bold";
        } else if (!radiosValue.checked && radiosValue.value === "1") {
          radiosValue.nextSibling.style.color = "green";
          radiosValue.nextSibling.style.fontWeight = "bold";
          radiosValue.nextSibling.style.fontStyle = "italic";
        } else if (radiosValue.checked && radiosValue.value === "0") {
          radiosValue.nextSibling.style.color = "red";
          radiosValue.nextSibling.style.fontWeight = "bold";
        } else {
          radiosValue.nextSibling.style.color = "";
        }
      }
    }
    setDisable(true);

    let commentSections = document.getElementsByClassName("commentSection");
    for (let i = 0; i < commentSections.length; i++) {
      const comment = commentSections[i];
      comment.style.display = "block";
    }

    const testPassed = (score / questionPortion.length) * 100 >= 85;
    if (testPassed) {
      setPass(1);
    } else {
      setPass(2);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let currentQuestion = 1;

  return (
    <div className="wrapper">
      <form className="quiz" onSubmit={handleSubmit}>
        <div className="quizInformation">
          <span>Student: {name}</span>
          <span>Score : {score}</span>

          {
            // eslint-disable-next-line no-sequences
            pass === 1 && (
              <div
                style={{
                  fontWeight: "bolder",
                  color: "green",
                  marginTop: "10px",
                }}
              >
                Verdict: Approved ({(score / questionPortion.length) * 100} %)
              </div>
            )
          }
          {
            // eslint-disable-next-line no-sequences
            pass === 2 && (
              <div
                style={{
                  fontWeight: "bolder",
                  color: "red",
                  marginTop: "10px",
                }}
              >
                Verdict: Unapproved ({(score / questionPortion.length) * 100} %)
              </div>
            )
          }
        </div>

        {questionPortion.map((question) => (
          <div className="singleQuestion" key={currentQuestion++}>
            <div className="questionText">{question.questionText}</div>
            {question.imgUrl && (
              // eslint-disable-next-line no-sequences
              <div
                id="imageHolder"
                style={{
                  height: "300px",
                  margin: "10px",
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              >
                <img
                  alt="illustration"
                  src={question.imgUrl}
                  // eslint-disable-next-line no-sequences
                  style={{
                    height: "295px",
                    margin: "0",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </div>
            )}
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

              {question.options.length >= 3 && (
                <>
                  <input
                    type="radio"
                    id="c"
                    name={currentQuestion}
                    value={question.options[2][1]}
                  />
                  <label>{question.options[2][0]}</label>
                  <br />
                </>
              )}

              {question.options.length === 4 && (
                <>
                  <input
                    type="radio"
                    id="d"
                    name={currentQuestion}
                    value={question.options[3][1]}
                  />
                  <label>{question.options[3][0]}</label>
                  <br />
                </>
              )}

              {question.comment && (
                <div className="commentSection" style={{ display: "none" }}>
                  {question.comment}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="submitArea">
          <button
            className="submitButton"
            type="submit"
            disabled={disable}
            onClick={handleCheck}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
