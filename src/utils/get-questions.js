const API_KEY = '8ReoxNnUh2plhilO6HCX2s1yuNX20rEx0WImGUfs';

export const getQuestions = async ({
  category,
  difficulty,
  numberOfQuestions,
}) => {
  const response = await fetch(`
    https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category}&difficulty=${difficulty}&limit=${numberOfQuestions}
    `);
  const data = await response.json();
  return data;
};
