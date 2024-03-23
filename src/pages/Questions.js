import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from '../hooks/useAxios';
import { useSelector } from "react-redux";

export const Questions = () => {

  const {
    question_category,
    question_difficulty,
    question_type,
    amout_of_question
  } = useSelector((state) => state);
  
  console.log(question_difficulty, question_category, question_type, amout_of_question);

  let apiUrl = `/api.php?amount=${amout_of_question}`;

  if(question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }

  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }

  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, loading } = useAxios({ url: apiUrl})

  // console.log(response);

  return (
    <Box>
      <Typography variant="h4">Questions 1</Typography>
      <Typography mt={5}>This is the Question?</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={5}>
        Score: 2/6
      </Box>
    </Box>
  )
}

export default Questions