import QuestionItem from "./QuestionItem";

function QuestionList({ questionsList = [], handleQuestionOnDelete }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList?.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            handleQuestionOnDelete={(questionId) =>
              handleQuestionOnDelete(questionId)
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
