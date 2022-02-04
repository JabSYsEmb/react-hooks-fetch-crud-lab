import axios from "axios";

const baseUrl = "http://localhost:4000/questions";

const getQuestionList = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((erorr) => console.log(erorr))
    .finally(() => console.log("getQuestionList called"));
};

const update = (id, updatedQuestion) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedQuestion)
    .then((response) => response.data)
    .catch((error) => console.log(error))
    .finally(() => console.log("update callend"));
};

const create = (newQuestion) => {
  return axios
    .post(`${baseUrl}/`, newQuestion)
    .then((response) => response.data)
    .catch((erorr) => console.log(erorr))
    .finally(() => console.log("create called"));
};

const deleteById = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .catch((error) => console.log(error))
    .finally(() => console.log("delete called"));
};

export { getQuestionList, update, create, deleteById };
