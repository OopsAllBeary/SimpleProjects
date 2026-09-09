import useData from "./useData";

export interface Quiz {
  question: string;
  incorrect_answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
  };
  is_answer_correct: {
    answer_a: boolean | null;
    answer_b: boolean | null;
    answer_c: boolean | null;
    answer_d: boolean | null;
  }
  category: string;
  difficulty: string;
}

export const useQuiz = () => {
  const URL = "https://opentdb.com/api.php?amount=1&category=20";
  return useData<Quiz>(URL);
};