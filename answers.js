import { details } from "./data.js";

export const getQuestionAns = (qn, functions) => {
  console.log("Question :", qn);
  console.log("Answer :", functions(details));
};
