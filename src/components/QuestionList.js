import QuestionItem from "./QuestionItem";

function QuestionList({ questionsList = [] }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList?.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
