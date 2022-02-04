import React, { useEffect, useState } from "react";
import { getQuestionList } from "../utils/communication";

import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    getQuestionList().then((data) => setQuestionsList(data));
  }, []);

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
        <QuestionList questionsList={questionsList} />
      )}
    </main>
  );
}

export default App;
