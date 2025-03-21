import React, { useState } from "react";
import { create } from "../utils/communication";

// {
//   "id": 1,
//   "prompt": "What special prop should always be included for lists of elements?",
//   "answers": [
//     "id",
//     "name",
//     "key",
//     "prop"
//   ],
//   "correctIndex": 2
// },

const initialState = {
  prompt: null,
  answer1: null,
  answer2: null,
  answer3: null,
  answer4: null,
  correctIndex: 0,
};

const reformateQuestion = (rawQuestion) => {
  return {
    prompt: rawQuestion.prompt,
    answers: [
      rawQuestion.answer1,
      rawQuestion.answer2,
      rawQuestion.answer3,
      rawQuestion.answer4,
    ],
    correctIndex: rawQuestion.correctIndex,
  };
};
function QuestionForm(props) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isAllInputsEntered = Object.values(formData)
      .map((isEmpty) => isEmpty)
      .includes(true);

    isAllInputsEntered
      ? alert("please fill all input field")
      : createNewQuestionAndUpdateState();
  }

  function createNewQuestionAndUpdateState() {
    create(reformateQuestion(formData));
    props.handleOnSubmit(reformateQuestion(formData));
    setFormData(initialState);
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formData.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.answer1}</option>
            <option value="1">{formData.answer2}</option>
            <option value="2">{formData.answer3}</option>
            <option value="3">{formData.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
