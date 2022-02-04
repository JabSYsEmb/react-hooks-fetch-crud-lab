import React, { useEffect, useState } from "react";
import { getQuestionList, deleteQuestion } from "../utils/communication";

import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    getQuestionList().then((data) => setQuestionsList(data));
  }, []);

  const handleOnDelete = (questionId) => {
    deleteQuestion(questionId).then(
      (status) =>
        status &&
        setQuestionsList((prev) =>
          prev.filter((question) => question.id !== questionId)
        )
    );
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm
          handleOnSubmit={(newQuestion) =>
            setQuestionsList((prev) => prev.concat(newQuestion))
          }
        />
      ) : (
        <QuestionList
          questionsList={questionsList}
          handleQuestionOnDelete={(questionId) => handleOnDelete(questionId)}
        />
      )}
    </main>
  );
}

export default App;
